import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(protected configService: ConfigService) {
    const apiSettings = configService.get('apiSettings', { infer: true });

    const settingsGitHub = {
      clientID: apiSettings.GOOGLE_CLIENT_ID || 'null',
      clientSecret: apiSettings.GOOGLE_CLIENT_SECRET || 'null',
      callbackURL: 'https://gateway.joyfy.online/api/v1/auth/google/callback',
      scope: ['email', 'profile'],
      passReqToCallback: true // Если нужно передавать request
    } as unknown as StrategyOptions;
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
      console.log(profile,'profileprofileprofileprofileprofile')
      const user = {
        googleId: id,
        username: displayName || this.generateUniqueUsername(displayName), 
        email: emails[0].value,
        avatar: photos[0]?.value,
        accessToken
      };


      done(null, user);
    } catch (error) {
      console.log(error);
    }
  }
  private generateUniqueUsername(displayName: string): string {
    // Генерация уникального username, например, добавление случайных чисел
    const cleanName = displayName.replace(/\s+/g, '_').toLowerCase();
    return `${cleanName}_${Math.floor(Math.random() * 10000)}`;
  }

}
