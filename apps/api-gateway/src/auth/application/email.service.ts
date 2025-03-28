import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { AuthRepository } from '../infrastructure/auth.repository';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { randomUUID } from 'crypto';

@Injectable()
export class EmailService {
  constructor(protected authRepository: AuthRepository) {}
  async sendEmail(
    userCode: string,
    email: string,
    recoveryPasswordCode?: string,
  ) {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'testestuser22@gmail.com',
        pass: 'hmoi odon lzcv rbgc',
      },
    });

    const emailTemplate = (
      title: string,
      message: string,
      buttonText: string,
      link: string,
    ) => `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #405DE6, #833AB4);
                color: #ffffff;
                text-align: center;
                padding: 20px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                padding: 20px;
                text-align: center;
              }
              .content p {
                font-size: 16px;
                color: #333333;
              }
              .button {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #405DE6;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
              }
              .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777777;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Joyfy</h1>
              </div>
              <div class="content">
                <p>${message}</p>
                <a href="${link}" class="button">${buttonText}</a>
              </div>
              <div class="footer">
                <p>If you did not request this, please ignore this email.</p>
              </div>
            </div>
          </body>
          </html>
        `;

    if (recoveryPasswordCode) {
      return transporter.sendMail({
        from: 'Joyfy <no-reply@joyfy.online>', // sender address
        to: email, // list of receivers
        subject: 'Password Recovery', // Subject line
        html: emailTemplate(
          'Password Recovery',
          'To finish password recovery, please click the button below:',
          'Recover Password',
          `https://joyfy.online/auth/password-recovery?recoveryCode=${recoveryPasswordCode}`,
        ),
      });
    }

    return transporter.sendMail({
      from: 'Joyfy <no-reply@joyfy.online>', // sender address
      to: email, // list of receivers
      subject: 'Complete Registration', // Subject line
      html: emailTemplate(
        'Complete Registration',
        'To finish registration, please click the button below:',
        'Complete Registration',
        `https://joyfy.online/auth/email-confirmed?code=${userCode}`,
      ),
    });
  }

  async confirmEmail(code: string): Promise<Result> {
    // Step 1: Find email confirmation by code
    const emailConfirmationResult =
      await this.authRepository.findUserByConfirmEmail(code);

    // If confirmation is not found or already confirmed, return an error
    if (
      !emailConfirmationResult.success ||
      emailConfirmationResult.data[0].isConfirmed
    ) {
      return {
        success: false,
        message: 'Email not confirmed or already confirmed',
        data: [],
      };
    }

    const emailConfirmation = emailConfirmationResult.data[0];

    // Step 2: Check if the confirmation code is valid and not expired
    const expirationDate = new Date(emailConfirmation.expirationDate);
    const isCodeValid =
      emailConfirmation.confirmationCode === code &&
      expirationDate > new Date();

    if (!isCodeValid) {
      return {
        success: false,
        message: 'Invalid or expired confirmation code',
        data: [],
      };
    }

    // Step 3: Update the confirmation status
    const isUpdated = await this.authRepository.updateConfirmation(
      emailConfirmation.userId,
    );

    if (!isUpdated.success) {
      return {
        success: false,
        message: 'Failed to update confirmation status',
        data: [],
      };
    }

    // Step 4: Successful confirmation
    return {
      success: true,
      message: 'Email confirmed successfully',
      data: [],
    };
  }

  async resendCode(email: string): Promise<Result> {
    try {
      const user:any = await this.authRepository.findBlogOrEmail(email);

      if (!user.success) {
        return {
          success: false,
          message: user.message,
          data: [],
        };
      }

      if (user.data[0].isConfirmed) {
        return {
          success: false,
          message: 'mail not confirmed',
          data: [],
        };
      }

      const newCode = randomUUID();
      const result = await this.authRepository.updateCodeUserByConfirmEmail(
        user.data[0].userId,
        newCode,
      );

      if (!result.success) {
        return {
          success: false,
          message: 'error updating emailCode',
          data: [],
        };
      }

      void this.sendEmail(newCode, email);

      return {
        success: true,
        message: 'successful sending of email message',
        data: [],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'error resending message email',
        data: [],
      };
    }
  }
}
