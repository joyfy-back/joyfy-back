import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(protected configService: ConfigService) {
    const apiSettings = configService.get('apiSettings', { infer: true });

    const settingsGitHub = {
      clientID: apiSettings.GOOGLE_CLIENT_ID || 'null',
      clientSecret: apiSettings.GOOGLE_CLIENT_SECRET || 'null',
      scope: ['user:email'],
    };
    super(settingsGitHub);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    try {
      const { id, displayName, emails, photos } = profile;

      const user = {
        googleId: id,
        username: displayName,
        email: emails?.[0]?.value,
        avatar: photos?.[0]?.value,
        accessToken,
      };

      done(null, user);
    } catch (error) {
      console.log(error);
    }
  }
}
