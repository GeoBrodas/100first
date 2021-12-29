import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // if user want to access '/' then next()
  if (pathname === '/') return NextResponse.next();

  // if user is authenticated and tries to access sign-up page
  if (token && pathname === '/auth/sign-in') {
    return NextResponse.redirect('/dashboard');
  }

  // if user is authenticated and tries to make a req to /api/* then next()
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  // if user is not authenticated and tries to access /api/* then redirect to sign-in page
  if (!token && pathname !== '/auth/sign-in') {
    return NextResponse.redirect('/auth/sign-in');
  }
}
