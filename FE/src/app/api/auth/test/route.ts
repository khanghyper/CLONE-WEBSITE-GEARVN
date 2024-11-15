import authApiRequest from "@/apiRequest/auth";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  cookieStore.set('accessToken', '')
  return Response.json('OK', {
    status: 200,
    headers: {
      'Set-Cookie': `accessToken=; Path=/; HttpOnly; Max-age=0`
    }
  })
} 