import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
// import { RolesGuard } from 'src/auth/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Permission,
  PermissionSchema,
  Role,
  RoleSchema,
  User,
  UserSchema,
} from 'src/user/model/user.model';
import { Cart, CartSchema } from 'src/cart/cart.model';

@Module({
  controllers: [UserController],
  providers: [UserService, JwtService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Role.name,
        schema: RoleSchema,
      },
      {
        name: Permission.name,
        schema: PermissionSchema,
      },
      {
        name: Cart.name,
        schema: CartSchema
      }
    ]),
  ],
})
export class UserModule { }
