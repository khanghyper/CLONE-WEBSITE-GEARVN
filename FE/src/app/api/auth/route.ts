import { cookies } from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();


  return Response.json(res.accessToken, {
    status: 200,
    headers: {
      'Set-Cookie': `accessToken=${res.accessToken}; Path=/; HttpOnly`
    }
  });
} 