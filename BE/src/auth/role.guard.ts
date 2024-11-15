import { Injectable, CanActivate, ExecutionContext, ForbiddenException, BadRequestException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getHandler()
    ])
    if (!requiredRoles) {
      throw new ForbiddenException({
        message: 'Forbiden Error',
        statusCode: 403
      })
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user) throw new BadRequestException()

    console.log(user);
    console.log(requiredRoles);

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException({
        message: 'Forbiden Error',
        statusCode: 403
      })
    }
    return true
  }
}
