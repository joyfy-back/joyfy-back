import { Test } from '@nestjs/testing';
import { EmailService } from '../../src/auth/application/email.service' 
import { AuthRepository } from '../../src/auth/infrastructure/auth.repository'
import { randomUUID } from 'crypto';

// Мокируем nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockImplementation((options) => Promise.resolve(options)),
  }),
}));

// Мокируем crypto
jest.mock('crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('mocked-uuid'),
}));

const mockAuthRepository = {
  findUserByConfirmEmail: jest.fn(),
  updateConfirmation: jest.fn(),
  findBlogOrEmail: jest.fn(),
  updateCodeUserByConfirmEmail: jest.fn(),
};

describe('EmailService', () => {
  let emailService: EmailService;
  let authRepository: AuthRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        EmailService,
        { provide: AuthRepository, useValue: mockAuthRepository },
      ],
    }).compile();

    emailService = moduleRef.get<EmailService>(EmailService);
    authRepository = moduleRef.get<AuthRepository>(AuthRepository);

    jest.clearAllMocks();
  });

  describe('sendEmail', () => {
    it('should send registration email', async () => {
      const result = await emailService.sendEmail('test-code', 'user@example.com');

      expect(result).toEqual({
        from: 'Joyfy <no-reply@joyfy.online>',
        to: 'user@example.com',
        subject: 'Complete Registration',
        html: expect.stringContaining('Complete Registration'),
      });
    });

    it('should send password recovery email', async () => {
      const result = await emailService.sendEmail(
        'test-code',
        'user@example.com',
        'recovery-code',
      );

      expect(result).toEqual({
        from: 'Joyfy <no-reply@joyfy.online>',
        to: 'user@example.com',
        subject: 'Password Recovery',
        html: expect.stringContaining('Password Recovery'),
      });
    });
  });

  describe('confirmEmail', () => {
    it('should return error if confirmation not found', async () => {
      mockAuthRepository.findUserByConfirmEmail.mockResolvedValue({
        success: false,
        data: [],
      });

      const result = await emailService.confirmEmail('invalid-code');

      expect(result.success).toBe(false);
      expect(result.message).toContain('Email not confirmed');
    });

    it('should return error if email already confirmed', async () => {
      mockAuthRepository.findUserByConfirmEmail.mockResolvedValue({
        success: true,
        data: [{ isConfirmed: true }],
      });

      const result = await emailService.confirmEmail('already-confirmed-code');

      expect(result.success).toBe(false);
      expect(result.message).toContain('already confirmed');
    });

    it('should return error if code is expired', async () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);

      mockAuthRepository.findUserByConfirmEmail.mockResolvedValue({
        success: true,
        data: [
          {
            isConfirmed: false,
            confirmationCode: 'expired-code',
            expirationDate: pastDate,
            userId: 1,
          },
        ],
      });

      const result = await emailService.confirmEmail('expired-code');

      expect(result.success).toBe(false);
      expect(result.message).toContain('expired confirmation code');
    });

    it('should return error if update fails', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);

      mockAuthRepository.findUserByConfirmEmail.mockResolvedValue({
        success: true,
        data: [
          {
            isConfirmed: false,
            confirmationCode: 'valid-code',
            expirationDate: futureDate,
            userId: 1,
          },
        ],
      });

      mockAuthRepository.updateConfirmation.mockResolvedValue({
        success: false,
      });

      const result = await emailService.confirmEmail('valid-code');

      expect(result.success).toBe(false);
      expect(result.message).toContain('Failed to update');
    });

    it('should confirm email successfully', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);

      mockAuthRepository.findUserByConfirmEmail.mockResolvedValue({
        success: true,
        data: [
          {
            isConfirmed: false,
            confirmationCode: 'valid-code',
            expirationDate: futureDate,
            userId: 1,
          },
        ],
      });

      mockAuthRepository.updateConfirmation.mockResolvedValue({
        success: true,
      });

      const result = await emailService.confirmEmail('valid-code');

      expect(result.success).toBe(true);
      expect(result.message).toContain('Email confirmed successfully');
      expect(authRepository.updateConfirmation).toHaveBeenCalledWith(1);
    });
  });

  describe('resendCode', () => {
    it('should return error if user not found', async () => {
      mockAuthRepository.findBlogOrEmail.mockResolvedValue({
        success: false,
        message: 'User not found',
      });

      const result = await emailService.resendCode('nonexistent@example.com');

      expect(result.success).toBe(false);
      expect(result.message).toBe('User not found');
    });

    it('should return error if email already confirmed', async () => {
      mockAuthRepository.findBlogOrEmail.mockResolvedValue({
        success: true,
        data: [{ isConfirmed: true, userId: 1 }],
      });

      const result = await emailService.resendCode('confirmed@example.com');

      expect(result.success).toBe(false);
      expect(result.message).toBe('mail not confirmed');
    });

    it('should return error if code update fails', async () => {
      mockAuthRepository.findBlogOrEmail.mockResolvedValue({
        success: true,
        data: [{ isConfirmed: false, userId: 1 }],
      });

      mockAuthRepository.updateCodeUserByConfirmEmail.mockResolvedValue({
        success: false,
      });

      const result = await emailService.resendCode('user@example.com');

      expect(result.success).toBe(false);
      expect(result.message).toBe('error updating emailCode');
    });

    it('should resend code successfully', async () => {
      mockAuthRepository.findBlogOrEmail.mockResolvedValue({
        success: true,
        data: [{ isConfirmed: false, userId: 1 }],
      });

      mockAuthRepository.updateCodeUserByConfirmEmail.mockResolvedValue({
        success: true,
      });

      const result = await emailService.resendCode('user@example.com');

      expect(result.success).toBe(true);
      expect(result.message).toBe('successful sending of email message');
      expect(authRepository.updateCodeUserByConfirmEmail).toHaveBeenCalledWith(
        1,
        'mocked-uuid',
      );
      expect(randomUUID).toHaveBeenCalled();
    });

    it('should handle errors during resend', async () => {
      mockAuthRepository.findBlogOrEmail.mockRejectedValue(new Error('DB error'));

      const result = await emailService.resendCode('user@example.com');

      expect(result.success).toBe(false);
      expect(result.message).toBe('error resending message email');
    });
  });
});