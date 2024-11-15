import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/model/user.model';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from 'src/auth/auth.guard';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/passport/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from 'src/auth/passport/jwt.strategy';
import { CartModule } from 'src/cart/cart.module';
import { BullModule } from '@nestjs/bull';
import { EmailConsumer } from 'src/auth/consumers/email.consumer';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, LocalStrategy, JwtStrategy, ConfigService, EmailConsumer],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    PassportModule,
    // JwtModule.register({
    //   secretOrPrivateKey: process.env.ACESSTOKEN_KEY,
    //   global: true,
    //   signOptions: {
    //     expiresIn: '1d'
    //   }
    // })
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get<string>('ACESSTOKEN_KEY'),
        global: true,
        signOptions: {
          expiresIn: configService.get<string>('ACESSTOKEN_EXPIRESIN')
        }
      })
    }),
    BullModule.registerQueue({
      name: 'send-mail'
    }),
    CartModule
  ],
})
export class AuthModule { }
