import LoginForm from "@/app/(auth)/auth/login/login-form";
import { auth } from "@/auth";


export default async function LoginPage() {

  return (
    <div className="w-full h-screen items-center flex justify-center">
      <LoginForm />
    </div>

  )
}
