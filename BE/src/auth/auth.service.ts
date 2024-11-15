import { HttpException, HttpStatus, Injectable, NotFoundException, BadGatewayException, UnauthorizedException, BadRequestException, NotAcceptableException, ConflictException, UnprocessableEntityException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDto, RegisterDto } from 'src/auth/dto/auth.dto';
import { User, UserDocument } from 'src/user/model/user.model';
import { omit } from 'lodash';
import { v4 as uuidv4 } from 'uuid'
import * as dayjs from 'dayjs';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CartService } from 'src/cart/cart.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectQueue('send-mail') private readonly sendMail: Queue,
    private mailerService: MailerService,
    private configService: ConfigService,
    private cartService: CartService
  ) { }

  validateUser = async (email: string, password: string): Promise<any> => {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return null
    }
    const verifyPassword = await compare(password, user.password);
    if (!verifyPassword) {
      return null
    }
    return user;
  };

  async login(user: any) {
    const payload = { email: user.email, _id: user._id };
    return {
      data: {
        access_token: this.jwtService.sign(payload, {
          secret: this.configService.get('ACESSTOKEN_KEY'),
          expiresIn: this.configService.get('ACESSTOKEN_EXPIRESIN')
        }),
      }
    };
  }

  register = async (payload: RegisterDto): Promise<any> => {
    if (payload.confirmPassword !== payload.password) throw new UnprocessableEntityException({
      errors: [
        {
          field: "confirmPassword",
          message: "Mật khẩu không khớp"
        }
      ],
      message: 'Unprocessable Entity',
      statusCode: 422,
    });

    const foundUser = await this.userModel.findOne({
      email: payload.email,
    });
    if (foundUser) {
      throw new UnprocessableEntityException({
        errors: [
          {
            field: "email",
            message: "Email này đã tồn tại, vui lòng chọn email khác!"
          }
        ],
        message: 'Unprocessable Entity',
        statusCode: 422,
      }
      );
    }

    const codeId = uuidv4();

    const hashPassword = await hash(payload.password, 10);

    const cart = await this.cartService.create();
    const createUserResponse = await this.userModel.create({
      ...payload,
      password: hashPassword,
      cart: cart._id,
      isActive: false,
      codeId: codeId,
      codeExpired: dayjs().add(1, 'day')
    });


    await this.sendMail.add('register', {
      email: createUserResponse.email,
      name: createUserResponse.name,
      codeId: createUserResponse.codeId,
    }, {
      removeOnComplete: true
    })
    // await this.mailerService.sendMail({
    //   to: createUserResponse.email,
    //   subject: 'Testing nest mailermodule',
    //   text: 'Welcome',
    //   template: 'register',
    //   context: {
    //     name: createUserResponse.name,
    //     activationCode: createUserResponse.codeId
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })

    return {
      message: 'OK',
      data: omit(createUserResponse['_doc'], ['password']) as Omit<User, 'password'>,
    };
  }
  profile = async (id: string) => {
    // await this.userModel.findByIdAndUpdate(id, {
    //   cart: cart._id
    // })
  }
}
