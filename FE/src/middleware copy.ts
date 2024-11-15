import { deleteAcessToken } from '@/actions/deleteAcessToken';
import accountApiRequest from '@/apiRequest/account';
import authApiRequest from '@/apiRequest/auth';
import envConfig from '@/config';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPaths = ['/auth/login', '/auth/register'];
const privatePaths = ['/admin', '/admin/products/all', '/admin/products/create', '/admin/categories/create']

// This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const accessToken = request.cookies.get('accessToken')?.value;


//   if (privatePaths.some(path => pathname.startsWith(path)) && !accessToken) {
//     return NextResponse.redirect(new URL('/auth/login', request.url))
//   }
//   if (privatePaths.some(path => pathname.startsWith(path)) && accessToken) {
//     const profile = await accountApiRequest.meInserver(accessToken);
//     if (profile.payload.data.role !== 'ADMIN') {
//       const res = await fetch('http://localhost:3000/api/auth/test ', {
//         method: 'POST',
//         body: JSON.stringify({}),
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       })
//       console.log(res);
//       // return NextResponse.redirect(new URL('/auth/login', request.url))
//     }
//   }

//   if (authPaths.some(path => pathname.startsWith(path)) && accessToken) {
//     const profile = await accountApiRequest.meInserver(accessToken);
//     return NextResponse.redirect(new URL('/admin', request.url))
//   }

// }
export async function middleware(request: NextRequest) {


}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/auth/:path*',
    '/admin/:path*'
  ]
}