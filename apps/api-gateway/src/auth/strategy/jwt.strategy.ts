// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.accessToken; 
        },
        ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ]),
      ignoreExpiration: false,
      secretOrKey: '12312',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.userId,
      username: payload.userName,
      deviceId: payload.deviceId,
      email: payload.email,
    };
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
