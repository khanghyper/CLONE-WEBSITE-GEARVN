import { AuthError } from "next-auth";

export class CustomAuError extends AuthError {
  static type: string
  constructor(message?: any) {
    super()
    this.type = message
  }
}

export class InvalidEmailPassword extends AuthError {
  static type = 'Tài khoản hoặc mật khẩu không đúng!'
}