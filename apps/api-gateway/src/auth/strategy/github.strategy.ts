import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(protected configService: ConfigService) {
    const apiSettings = configService.get('apiSettings', { infer: true });

    const settingsGitHub = {
      clientID: apiSettings.GITHUB_CLIENT_ID,
      clientSecret: apiSettings.GITHUB_CLIENT_SECRET,
      callbackURL: apiSettings.GITHUB_CALLBACK_URL,
      scope: ['user:email'],
    };
    console.log(settingsGitHub,'settingsGitHubsettingsGitHub')
    super(settingsGitHub);
  }

  async validate(accessToken: string, profile: any) {
    try {
      return {
        githubId: profile.id,
        username: profile.username,
        email: profile.emails?.[0]?.value,
        accessToken,
      };
  
    } catch (error) {
      console.log(error)
    }
  }
}
