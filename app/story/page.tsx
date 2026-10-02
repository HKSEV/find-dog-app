"use client"

import React, { useState } from "react";
import * as S from "../../css/style.styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StoryPage() {
  return (
    <S.AppWraper>
      <Header title="스토리"/>

      <S.Container>
        <S.Mt70/>
      </S.Container>

      <Footer activeNo={4}/>
    </S.AppWraper>
  );
};