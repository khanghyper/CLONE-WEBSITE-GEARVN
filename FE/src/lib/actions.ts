"use server"


import { signIn } from "@/auth"
import { AuthError } from "next-auth";

export const authenticate = async (email: string, password: string) => {
  try {
    const res = await signIn("credentials",
      {
        email,
        password,
        redirect: false
      });
    return res;
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      if (error.name === 'InvalidEmailPassword') {
        return {
          'error': error.type,
          code: 1
        }
      } else {
        return {
          'error': 'Something with wrong!'
        }
      }
    }
    return {
      'error': 'Something with wrong!'
    }
  }
}

export const authenticateWithGoogle = async (token: string) => {
  try {
    const res = await signIn("credentials",
      {
        token,
        redirect: false
      });
    return res;
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      if (error.name === 'InvalidEmailPassword') {
        return {
          'error': error.type,
          code: 1
        }
      } else {
        return {
          'error': 'Something with wrong1!'
        }
      }
    }
    return {
      'error': 'Something with wrong2!'
    }
  }
}

export const customLogout = async () => {

}