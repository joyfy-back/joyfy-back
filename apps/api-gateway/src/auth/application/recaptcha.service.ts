import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class RecaptchaService {
  private readonly secretKey: string = 'YOUR_SECRET_KEY';

  constructor(protected configService: ConfigService) {
    const result = configService.get('apiSettings', { infer: true });
    this.secretKey = result.RECAPTCHA_SECRET_KEY;
  }

  async validateRecaptcha(recaptchaResponse: string): Promise<boolean> {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: this.secretKey,
          response: recaptchaResponse,
        },
      },
    );

    const { success } = response.data;

    if (!success) {
      throw new HttpException(
        'Invalid reCAPTCHA. Please try again.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }
}
