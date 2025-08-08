import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const allowedPaths = ['/home', '/product', '/organization', '/activities', '/contact'];
    const pathname = request.nextUrl.pathname;

    // 静的ファイルや画像、APIルートへのアクセスを許可
    if (pathname.startsWith('/_next') || pathname.startsWith('/public') || pathname.startsWith('/api') || pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js)$/)) {
        return NextResponse.next();
    }

    if (!allowedPaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
