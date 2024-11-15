import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_API_ENDPOINT_1: z.string(),
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_LOGIN_ADMIN_MODE: z.string()
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_API_ENDPOINT_1: process.env.NEXT_PUBLIC_API_ENDPOINT_1,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_LOGIN_ADMIN_MODE: process.env.NEXT_PUBLIC_LOGIN_ADMIN_MODE
})
if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

const envConfig = configProject.data
export default envConfig