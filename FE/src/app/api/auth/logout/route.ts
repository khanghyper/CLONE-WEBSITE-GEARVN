import authApiRequest from "@/apiRequest/auth";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  if (!accessToken) {
    return Response.json({
      message: 'AccessToken does not exist!'
    }, {
      status: 401
    })
  }
  try {
    const result = await authApiRequest.logoutFromNextServerToServer(accessToken.value);
    return Response.json(result.payload, {
      status: 200,
      headers: {
        'Set-Cookie': `accessToken=; Path=/; HttpOnly; Max-age=0`
      }
    })
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status
      })
    } else {
      return Response.json({
        message: 'loi khong xac dinh!'
      }, {
        status: 500
      })
    }
  }
} 