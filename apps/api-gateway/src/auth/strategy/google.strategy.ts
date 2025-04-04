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
    request: any, // <-- Не забудь указать request
    accessToken: string,
    refreshToken: string,
    profile: any
  ) {
    if (!profile || !profile.id) {
      throw new Error('Invalid Google profile');
    }

    const { id, displayName = 'Google User', emails = [], photos = [] } = profile;

    return {
      googleId: id || '11',
      username: displayName || this.generateUniqueUsername(),
      email: emails[0]?.value || `${id}@google.com`,
      avatar: photos[0]?.value || null,
      accessToken,
    };
  }
  private generateUniqueUsername(): string {
    return `user_${Math.floor(Math.random() * 100000)}`;
  }

}
