import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions } from 'passport-github2';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(protected configService: ConfigService) {
    const apiSettings = configService.get('apiSettings', { infer: true });

    const settingsGitHub = {
      clientID: 'Ov23linfRpuNdG9dqBPE',
      clientSecret: '474e1146c2fb9fc73cde3686969c43ec38cb0a7e',
      callbackURL: 'http://localhost:3000/api/v1/auth/github/callback',
      scope: ['user:email', 'read:user'],
      passReqToCallback: true,
    } as unknown as StrategyOptions;
    super(settingsGitHub);
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any) => void,
  ) {
    try {
      if (!profile || !profile.id || !profile.username) {
        throw new Error('Invalid GitHub profile: missing required fields');
      }

      let email = profile.emails?.[0]?.value;

      if (!email) {
        const { data } = await axios.get('https://api.github.com/user/emails', {
          headers: { Authorization: `token ${accessToken}` },
        });
        email = data.find((e: any) => e.primary)?.email || data[0]?.email;
      }

      if (!email) {
        email = `${profile.username}@users.noreply.github.com`;
      }

      const user = {
        githubId: profile.id,
        username: profile.username,
        displayName: profile.displayName || profile.username,
        email,
        accessToken,
      };

      done(null, user);
    } catch (error) {
      console.error('GitHub Auth Error:', error);
      done(error, null);
    }
  }
}
