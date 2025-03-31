import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { AuthService } from '../../src/auth/application/auth.service';
import { AuthRepository } from '../../src/auth/infrastructure/auth.repository';
jest.mock('argon2', () => ({
  verify: jest.fn(),
}));

const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
  decode: jest.fn(),
};

const mockAuthRepository = {
  findIsEmail: jest.fn(),
  findRottenSessions: jest.fn(),
  updateSession: jest.fn(),
  checkPasswordRecoveryCode: jest.fn(),
};

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let authRepository: AuthRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwtService },
        { provide: AuthRepository, useValue: mockAuthRepository },
      ],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    jwtService = moduleRef.get<JwtService>(JwtService);
    authRepository = moduleRef.get<AuthRepository>(AuthRepository);

    jest.clearAllMocks();
  });

  describe('checkCredentials', () => {
    it('should return failure if email not found', async () => {
      mockAuthRepository.findIsEmail.mockResolvedValue({
        success: false,
        message: 'Email not found',
        data: [],
      });

      const result = await authService.checkCredentials(
        'nonexistent@test.com',
        'password',
      );

      expect(result.success).toBe(false);
      expect(result.message).toContain('no such email');
      expect(authRepository.findIsEmail).toHaveBeenCalledWith(
        'nonexistent@test.com',
      );
    });

    it('should return failure if password is invalid', async () => {
      const mockUser = {
        passwordHash: 'hashed_password',
      };

      mockAuthRepository.findIsEmail.mockResolvedValue({
        success: true,
        data: [mockUser],
      });
      (verify as jest.Mock).mockResolvedValue(false);

      const result = await authService.checkCredentials(
        'valid@test.com',
        'wrong_password',
      );

      expect(result.success).toBe(false);
      expect(result.message).toContain('password is incorrect');
      expect(verify).toHaveBeenCalledWith('hashed_password', 'wrong_password');
    });

    it('should return success if credentials are valid', async () => {
      const mockUser = {
        id: 1,
        email: 'valid@test.com',
        passwordHash: 'hashed_password',
      };

      mockAuthRepository.findIsEmail.mockResolvedValue({
        success: true,
        data: [mockUser],
      });
      (verify as jest.Mock).mockResolvedValue(true);

      const result = await authService.checkCredentials(
        'valid@test.com',
        'correct_password',
      );

      expect(result.success).toBe(true);
      expect(result.message).toContain('correct');
      expect(result.data[0]).toEqual(mockUser);
    });
  });

  describe('checkValidateUserSessionByRefreshToken', () => {
    it('should return failure if token is invalid', async () => {
      mockJwtService.verify.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result =
        await authService.checkValidateUserSessionByRefreshToken(
          'invalid_token',
        );

      expect(result.success).toBe(false);
      expect(result.message).toContain('Invalid token');
    });

    it('should return failure if session not found', async () => {
      const mockDecodedToken = {
        userId: 1,
        deviceId: 'device123',
        iat: Date.now(),
      };

      mockJwtService.verify.mockReturnValue(mockDecodedToken);
      mockAuthRepository.findRottenSessions.mockResolvedValue({
        success: false,
        data: [],
      });

      const result =
        await authService.checkValidateUserSessionByRefreshToken('valid_token');

      expect(result.success).toBe(false);
      expect(authRepository.findRottenSessions).toHaveBeenCalledWith(
        mockDecodedToken.userId,
        mockDecodedToken.deviceId,
      );
    });

    it('should return failure if token is older than session', async () => {
      const mockDecodedToken = {
        userId: 1,
        deviceId: 'device123',
        iat: 1000,
      };

      const mockSession = {
        lastActiveDate: 2000,
      };

      mockJwtService.verify.mockReturnValue(mockDecodedToken);
      mockAuthRepository.findRottenSessions.mockResolvedValue({
        success: true,
        data: [mockSession],
      });

      const result =
        await authService.checkValidateUserSessionByRefreshToken('valid_token');

      expect(result.success).toBe(false);
    });

    it('should return success if token and session are valid', async () => {
      const mockDecodedToken = {
        userId: 1,
        deviceId: 'device123',
        iat: 2000,
      };

      const mockSession = {
        lastActiveDate: 1000,
      };

      mockJwtService.verify.mockReturnValue(mockDecodedToken);
      mockAuthRepository.findRottenSessions.mockResolvedValue({
        success: true,
        data: [mockSession],
      });

      const result =
        await authService.checkValidateUserSessionByRefreshToken('valid_token');

      expect(result.success).toBe(true);
      expect(result.data[0]).toEqual(mockDecodedToken);
    });
  });

  describe('updateToken', () => {
    it('should generate new tokens and update session', async () => {
      const mockPayload = {
        userLogin: 'test',
        userId: 1,
        deviceId: 'device123',
      };

      const mockTokens = {
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
      };

      const mockDecodedToken = {
        iat: Date.now(),
      };

      mockJwtService.sign.mockImplementation((body, options) => {
        return options?.expiresIn
          ? mockTokens.refreshToken
          : mockTokens.accessToken;
      });
      mockJwtService.decode.mockReturnValue(mockDecodedToken);

      const result = await authService.updateToken(mockPayload);

      expect(result).toEqual(mockTokens);
      expect(jwtService.sign).toHaveBeenCalledWith(mockPayload);
      expect(jwtService.sign).toHaveBeenCalledWith(mockPayload, {
        expiresIn: '1h',
      });
      expect(authRepository.updateSession).toHaveBeenCalledWith(
        mockDecodedToken.iat,
        mockPayload.userId,
        mockPayload.deviceId,
      );
    });
  });

  describe('checkPasswordRecovery', () => {
    it('should return failure if recovery code is invalid', async () => {
      mockAuthRepository.checkPasswordRecoveryCode.mockResolvedValue({
        success: false,
      });

      const result = await authService.checkPasswordRecovery('invalid_code');

      expect(result.success).toBe(false);
      expect(authRepository.checkPasswordRecoveryCode).toHaveBeenCalledWith(
        'invalid_code',
      );
    });

    it('should return success if recovery code is valid', async () => {
      const mockRecoveryData = { id: 1, code: 'valid_code' };

      mockAuthRepository.checkPasswordRecoveryCode.mockResolvedValue({
        success: true,
        data: mockRecoveryData,
      });

      const result = await authService.checkPasswordRecovery('valid_code');

      expect(result.success).toBe(true);
      expect(result.data[0]).toEqual({ success: true, data: mockRecoveryData });
    });
  });
});
