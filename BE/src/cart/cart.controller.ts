import { Body, Controller, Get, Inject, Post, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller('carts')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  @Roles(Role.ADMIN, Role.USER)
  @Get('cart')
  async getCart(@Request() req) {
    return await this.cartService.getCart(req.user.cart)
  }

  @Roles(Role.ADMIN, Role.USER)
  @Post('cart/add')
  async addItem(@Request() req, @Body() payload: any) {
    return await this.cartService.addItem(req.user.cart, payload)
  }

  @Roles(Role.ADMIN, Role.USER)
  @Post('cart/delete')
  async deleteItem(@Request() req, @Body() payload: any) {
    return await this.cartService.deleteItem(req.user.cart, payload)
  }

  @Public()
  @Get('cart/set-cache')
  async setCache() {
    await this.cacheManager.set('name', 'khang', 10)
    return true
  }

  @Public()
  @Get('cart/get-cache')
  async getCache() {
    return await this.cacheManager.get('name')
  }
}
