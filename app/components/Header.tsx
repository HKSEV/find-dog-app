"use client"

import React from "react";
import * as S from "../../css/style.styles";

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
};

export default function Header({title, onBackClick}: HeaderProps) {
  const handleBack = () => {
    if (onBackClick)
      onBackClick();
    else
      window.history.back();
  };

  return (
    <S.TopFlexBasic>
      <S.Back onClick={handleBack}>
        &lt; 뒤로
      </S.Back>
      <S.H5Bold>{title}</S.H5Bold>
      <S.None/>
    </S.TopFlexBasic>
  );
};