import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/model/user.model';
import { Model } from 'mongoose';
import * as _ from 'lodash'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.ACESSTOKEN_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.userModel.findById(payload._id).select('-password -createdAt -updatedAt -__v');
    return user['_doc'];
  }
}
