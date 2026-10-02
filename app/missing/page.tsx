"use client"

import React, { useState } from "react";
import * as S from "../../css/style.styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MissingPage() {
  return (
    <S.AppWraper>
      <Header title="실종/제보"/>

      <S.Container>
        <S.Mt70/>
      </S.Container>

      <Footer activeNo={3}/>
    </S.AppWraper>
  );
};