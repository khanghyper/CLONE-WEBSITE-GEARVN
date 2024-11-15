import accountApiRequest from '@/apiRequest/account';
import authApiRequest from '@/apiRequest/auth';
import { InvalidEmailPassword } from '@/lib/errors';
import { HttpError } from '@/lib/http';
import { IUser } from '@/lib/types';
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        token: {}
      },
      authorize: async (credentials) => {
        try {
          const { email, password, token } = credentials;
          let accessToken = '';
          if (!token) {
            const res = await authApiRequest.login({ email, password });
            accessToken = res.payload.data.access_token as string;
          } else {
            accessToken = token as string;
          }


          const profile = await accountApiRequest.meInserver(accessToken);
          let user = profile.payload.data as IUser
          // if (user.role !== 'ADMIN') {
          //   throw new InvalidEmailPassword('Loi abx');
          // }


          return {
            ...user,
            accessToken
          };
        } catch (error) {
          if (error instanceof HttpError) {
            throw new InvalidEmailPassword(error.payload.message);
          }
          throw new Error('co loi xay ra')
        }
      }
    })
  ],
  pages: {
    signIn: 'auth/login'
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = (user as any)
      }
      return token
    },
    session: ({ session, token }) => {
      (session.user as any) = token.user;
      return session
    },
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // },
  }
})