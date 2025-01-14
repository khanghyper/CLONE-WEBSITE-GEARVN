import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Tai khoan hoac mat khau khong dung',
        statusCode: 401
      });
    }
    if (!user.isActive) {
      throw new UnauthorizedException({
        message: 'Tai khoan chua duoc xac thuc',
        statusCode: 401
      });
    }
    return user;
  }
}
