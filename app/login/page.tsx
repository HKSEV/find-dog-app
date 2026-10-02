"use client"

import React, { useState } from "react";
import * as S from "../../css/style.styles";
import Header from "../components/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    };
    try {
      const res = await fetch("/api/members/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      if (res.ok) {
        const userData = await res.json();
        // 추가
        localStorage.setItem("user", JSON.stringify(userData));
        alert(`환영합니다, ${userData.nickname}님!`);
        window.location.href = "/mypage";
      }
      else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      };
    }
    catch (err) {
      console.error("로그인 에러: ", err);
      alert("서버와 연결할 수 없습니다. 백엔드 서버가 켜져 있는지 확인해주세요.");
    };
  };

  // 2.카카오 로그인 연동
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <S.AppWraper>
      <S.ContainerColumn>
        <Header title="로그인"/>
        <S.Mt70/>
        <S.Column>
          <S.FormControl
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <S.FormControl
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <S.BtnBottomWrap>
            <S.BaseBtn
            $variant="primary"
            onClick={handleLogin}>
              로그인
            </S.BaseBtn>
            <br/>
            <S.BaseBtn
            $variant="kakao"
            onClick={handleKakaoLogin}>
              카카오톡으로 간편하게 시작하기
            </S.BaseBtn>
            <br/>
            <S.BaseBtn $variant="local">
              Apple로 로그인
            </S.BaseBtn>
          </S.BtnBottomWrap>
        </S.Column>
      </S.ContainerColumn>
    </S.AppWraper>
  );
};