import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
  Response,
  BadRequestException,
  Param
} from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/auth/dto/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Request as ExpressRequest, Response as ExpressRespose } from 'express';
// import { RolesGuard } from './role.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/passport/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/passport/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { RolesGuard } from 'src/auth/role.guard';
import { Role } from 'src/auth/role.enum';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Public()
  @Post('register')
  async register(@Body() payload) {
    return await this.authService.register(payload)
  }

  @Roles(Role.USER, Role.ADMIN)
  @Get('profile')
  getProfile(@Request() req) {
    return {
      message: 'OK',
      data: req.user
    }
  }

  @Roles(Role.USER, Role.ADMIN)
  @Post('logout')
  logout() {
    return {
      message: 'OK'
    }
  }

  @Get('test/:id')
  async test(@Param('id') id: string) {

    return {
      message: 'OK',
      data: id
    }
  }

}
