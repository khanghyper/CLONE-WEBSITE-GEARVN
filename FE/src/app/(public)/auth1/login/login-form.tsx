'use client'
import authApiRequest from '@/apiRequest/auth'
import { Button } from '@/components/ui/button'
import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { HttpError } from '@/lib/http'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { authenticate } from '@/lib/actions'
import { useRouter } from 'next/navigation'

export default function LoginForm() {

  const [email, setEmail] = useState<string>('khang123@gmail.com')
  const [password, setPassword] = useState<string>('123');
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email, password
    }
    const res = await authenticate(email, password);
    if (res?.error) {
      toast({
        title: 'Error',
        description: res.error,
        variant: 'destructive'
      })
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border w-96 p-8 rounded relative">
      <div className='text-[18px] absolute -top-3 left-5 bg-white'>Đăng nhập</div>
      <div className="py-2 flex gap-2 flex-col">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="shadcn@gmail.com"
          value={email}
        />
      </div>
      <div className="py-2 flex gap-2 flex-col">
        <Label>Mật khẩu</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
          type='password'
          value={password}
        />
      </div>
      <Button className="mt-4" type="submit">Đăng nhập</Button>
    </form >
  )
}
