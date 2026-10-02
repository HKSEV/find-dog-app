"use client"

import React from "react";
// nextjs에서 바뀌는것
import Link from "next/link";
import {
  Home as HomeIcon,
  Pets as PetsIcon,
  Campaign as CampaignIcon,
  MenuBook as MenuBookIcon,
  PersonOutlined as PersonOutlineIcon,
} from "@mui/icons-material";

import * as S from "../../css/style.styles";

interface FooterProps {
  activeNo: number;
};

export default function Footer({activeNo}: FooterProps) {
  return (
    <S.BottomNav>
      <Link href="/">
        <S.NavItem $active={activeNo === 1 ? true : false}>
          <HomeIcon/>
          <span>Home</span>
        </S.NavItem>
      </Link>

      <Link href="/shelter">
        <S.NavItem $active={activeNo === 2 ? true : false}>
          <PetsIcon/>
          <span>보호소</span>
        </S.NavItem>
      </Link>

      <Link href="/missing">
        <S.NavItem $active={activeNo === 3 ? true : false}>
          <CampaignIcon/>
          <span>실종/제보</span>
        </S.NavItem>
      </Link>

      <Link href="/story">
        <S.NavItem $active={activeNo === 4 ? true : false}>
          <MenuBookIcon/>
          <span>스토리</span>
        </S.NavItem>
      </Link>

      <Link href="/mypage">
        <S.NavItem $active={activeNo === 5 ? true : false}>
          <PersonOutlineIcon/>
          <span>마이메뉴</span>
        </S.NavItem>
      </Link>
    </S.BottomNav>
  );
};