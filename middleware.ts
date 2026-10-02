// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. 로그인 페이지 접속은 미들웨어 검사 대상에서 제외 (무한 리다이렉트 방지)
  if (pathname === "/admin/login")
    return NextResponse.next();

  // 2. 브라우저가 보낸 JSESSIONID 쿠키 존재 여부 확인
  const sessionCookie = request.cookies.get("JSESSIONID");

  // 쿠키 자체가 없으면 바로 로그인 페이지로 리다이렉트
  if (!sessionCookie)
    return NextResponse.redirect(new URL("/admin/login", request.url));

  // 3. (선택/권장) 백엔드에 실제 세션 유효성 직접 검증
  // 단순히 쿠키만 존재하는 만료된 세션일 수 있으므로 백엔드 /api/admin/check 호출
  try {
    const response = await fetch("http://localhost:8080/api/admin/check", {
      headers: {
        // 미들웨어에서 받은 쿠키를 그대로 백엔드로 전달
        Cookie: `JSESSIONID=${sessionCookie.value}`,
      },
    });
    // // 백엔드에서 200 OK가 아니면(401 등) 세션 만료로 판단
    if (!response.ok) {
      console.log(response.body);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    };
  }
  catch (err) {
    console.error(err);
    // 백엔드 서버 통신 에러 시 로그인으로 이동
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // 세션이 유효하면 원래 요청한 페이지로 통과
  return NextResponse.next();
}

// 4. 미들웨어가 동작할 경로 지정 (/admin 및 하위 모든 경로)
export const config = {
  matcher: ["/admin/:path*"],
};