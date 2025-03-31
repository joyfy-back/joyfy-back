import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'argon2';
import { randomUUID } from 'crypto';
import {
  CreateAccountUserGithubCommand,
  CreateAccountUserGithubUseCase,
} from '../../src/auth/application/use-cases/create-account.user.github.use-case';
import {
  CreateAccountUserGoogleCommand,
  CreateAccountUserGoogleUseCase,
} from '../../src/auth/application/use-cases/create-account.user.google.use-case';
import {
  CreateUserCommand,
  CreateUserUseCase,
} from '../../src/auth/application/use-cases/create-user.use-case';
import { AuthRepository } from '../../src/auth/infrastructure/auth.repository';
import { EmailService } from '../../src/auth/application/email.service';
import { Result } from '../../../../libs/shared/types';

jest.mock('argon2', () => ({
  hash: jest.fn().mockResolvedValue('hashed-password'),
}));

jest.mock('crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('mocked-uuid'),
}));

jest.mock('date-fns', () => ({
  add: jest.fn().mockReturnValue(new Date('2023-01-01')),
}));

const mockAuthRepository = {
  createAccountAndGithubUser: jest.fn(),
  createAccountAndGoogleUser: jest.fn(),
  createUser: jest.fn(),
};

const mockEmailService = {
  sendEmail: jest.fn().mockResolvedValue(undefined),
};

const mockJwtService = {};

describe('Auth Use Cases', () => {
  let githubUseCase: CreateAccountUserGithubUseCase;
  let googleUseCase: CreateAccountUserGoogleUseCase;
  let createUserUseCase: CreateUserUseCase;
  let authRepository: AuthRepository;
  let emailService: EmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateAccountUserGithubUseCase,
        CreateAccountUserGoogleUseCase,
        CreateUserUseCase,
        { provide: AuthRepository, useValue: mockAuthRepository },
        { provide: EmailService, useValue: mockEmailService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    githubUseCase = moduleRef.get<CreateAccountUserGithubUseCase>(
      CreateAccountUserGithubUseCase,
    );
    googleUseCase = moduleRef.get<CreateAccountUserGoogleUseCase>(
      CreateAccountUserGoogleUseCase,
    );
    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
    authRepository = moduleRef.get<AuthRepository>(AuthRepository);
    emailService = moduleRef.get<EmailService>(EmailService);

    jest.clearAllMocks();
  });

  describe('CreateAccountUserGithubUseCase', () => {
    const command = new CreateAccountUserGithubCommand(
      'github@example.com',
      'githubuser',
      '123456',
    );

    it('should successfully create GitHub user', async () => {
      //@ts-ignore
      const mockResult: Result<any> = {
        success: true,
        data: [{ id: '1', email: 'github@example.com' }],
      };

      mockAuthRepository.createAccountAndGithubUser.mockResolvedValue(
        mockResult,
      );

      const result = await githubUseCase.execute(command);

      expect(result.success).toBe(true);
      expect(result.message).toBe('the user was created successfully');
      expect(authRepository.createAccountAndGithubUser).toHaveBeenCalledWith(
        command,
      );
    });

    it('should handle repository failure', async () => {
      mockAuthRepository.createAccountAndGithubUser.mockResolvedValue({
        success: false,
      });

      const result = await githubUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('');
    });

    it('should handle unexpected errors', async () => {
      mockAuthRepository.createAccountAndGithubUser.mockRejectedValue(
        new Error('DB error'),
      );

      const result = await githubUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('DB error');
    });
  });

  describe('CreateAccountUserGoogleUseCase', () => {
    const command = new CreateAccountUserGoogleCommand(
      'google@example.com',
      'googleuser',
      'google123',
      'avatar.jpg',
    );

    it('should successfully create Google user', async () => {
      //@ts-ignore
      const mockResult: Result<any> = {
        success: true,
        data: [{ id: '2', email: 'google@example.com' }],
      };

      mockAuthRepository.createAccountAndGoogleUser.mockResolvedValue(
        mockResult,
      );

      const result = await googleUseCase.execute(command);

      expect(result.success).toBe(true);
      expect(result.message).toBe('the user was created successfully');
      expect(authRepository.createAccountAndGoogleUser).toHaveBeenCalledWith(
        command,
      );
    });

    it('should handle repository failure', async () => {
      mockAuthRepository.createAccountAndGoogleUser.mockResolvedValue({
        success: false,
      });

      const result = await googleUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('');
    });

    it('should handle unexpected errors', async () => {
      mockAuthRepository.createAccountAndGoogleUser.mockRejectedValue(
        new Error('DB error'),
      );

      const result = await googleUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('DB error');
    });
  });

  describe('CreateUserUseCase', () => {
    const command = new CreateUserCommand(
      'user@example.com',
      'testuser',
      'password123',
      true,
      'password123',
      [],
    );

    it('should successfully create user', async () => {
      const mockUser = {
        id: '3',
        email: 'user@example.com',
        emailConfirmation: {
          confirmationCode: 'mocked-uuid',
          isConfirmed: false,
        },
      };

      mockAuthRepository.createUser.mockResolvedValue({
        success: true,
        data: mockUser,
      });

      const result = await createUserUseCase.execute(command);

      expect(result.success).toBe(true);
      expect(result.message).toBe('the user was created successfully');
      expect(authRepository.createUser).toHaveBeenCalled();
      expect(emailService.sendEmail).toHaveBeenCalledWith(
        'mocked-uuid',
        'user@example.com',
      );
      expect(hash).toHaveBeenCalledWith('password123');
      expect(randomUUID).toHaveBeenCalled();
    });

    it('should handle password hash failure', async () => {
      (hash as jest.Mock).mockRejectedValue(new Error('Hash error'));

      const result = await createUserUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('Hash error');
    });

    it('should handle repository failure', async () => {
      mockAuthRepository.createUser.mockResolvedValue({
        success: false,
      });

      const result = await createUserUseCase.execute(command);

      expect(result.success).toBe(false);
      expect(result.message).toContain('Hash error');
    });
  });
});
