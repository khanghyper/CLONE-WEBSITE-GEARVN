

import { auth } from "@/auth"

const authPaths = ['/auth/login', '/auth/register'];
const privatePaths = ['/admin', '/admin/products/all', '/admin/products/create', '/admin/categories/create']

export default auth((req) => {
  const { pathname } = req.nextUrl;
  if (privatePaths.some(path => pathname.startsWith(path)) && !req.auth) {
    return Response.redirect(new URL('/auth/login', req.url))
  }

  if (privatePaths.some(path => pathname.startsWith(path)) && req.auth) {
    if ((req.auth.user as any)?.role !== 'ADMIN') {
      return Response.redirect(new URL('/', req.url))
    }
  }

  if (authPaths.some(path => pathname.startsWith(path)) && req.auth) {
    return Response.redirect(new URL('/admin', req.url))
  }
})
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }
export const config = {
  matcher: [
    '/auth/:path*',
    '/admin/:path*'
  ]
}