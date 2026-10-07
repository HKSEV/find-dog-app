"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Bell, 
  SlidersHorizontal, 
  ChevronDown, 
  Info, 
  MapPin, 
  Calendar, 
  Plus,
  Home,
  ShieldAlert,
  Search,
  BookOpen,
  User
} from "lucide-react";
import useModal from "../components/contexts/ModalContext";
import * as S from "@/css/Style.styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MissingPage() {
  const {openModal, closeModal} = useModal();
  const [animalList, setAnimalList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAlertOn, setIsAlertOn] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    breed: "",
    gender: "수컷",
    age: "",
    weight: "",
    color: "",
    rescueLocation: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/missing-posts");
      setAnimalList(response.data)
    } catch (err) {
      console.error("실종/제보 데이터를 불러오는데 실패했습니다.", err);
    } finally {
      setIsLoading(false);
    };
  };

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file)
      setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/missing-posts", formData, {withCredentials: true});
      alert("실종 신고가 등록되었습니다.");
      fetchData();
      //modalopen
    } catch (err) {
      console.error("등록 실패: ", err);
      alert("글 등록 실패했습니다.");
    };
  };

  return (
    <S.AppWraper>
      {/* 상단 헤더 */}
      <S.Header>
        <S.Logo>실종/제보</S.Logo>
        <S.BellIconWrapper>
          <Bell size={22} color="#333"/>
        </S.BellIconWrapper>
      </S.Header>

      <S.Container>
        <S.Mt70/>
        
        {/* 필터 바 영역 */}
        <S.FilterBar>
          <S.FilterButton>
            <SlidersHorizontal size={16}/>
          </S.FilterButton>
          <S.FilterButton>
            최근 1년 <ChevronDown size={14}/>
          </S.FilterButton>
          <S.FilterButton>
            등록일 기준 <ChevronDown size={14}/>
          </S.FilterButton>
          <S.FilterButton>
            모든 지역 <ChevronDown size={14}/>
          </S.FilterButton>
          <S.FilterButton>
            모든 동물 <ChevronDown size={14}/>
          </S.FilterButton>
        </S.FilterBar>

        {/* 실시간 알림 설정 배너 */}
        <S.MissingAlertBanner>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Bell size={18} color="#555" />
            <div>
              <S.AlertTitle>신고/제보 실시간 알림</S.AlertTitle>
              <S.AlertSub>설정한 지역·품종의 새 글을 알려드려요</S.AlertSub>
            </div>
          </div>
          <S.ToggleSwitch 
          $active={isAlertOn} 
          onClick={() => setIsAlertOn(!isAlertOn)}>
            <S.ToggleThumb $active={isAlertOn}/>
          </S.ToggleSwitch>
        </S.MissingAlertBanner>

        {/* 게시판 이용 안내 */}
        <S.GuideBox>
          <Info size={16} color="#666"/>
          <S.GuideText>신고/제보 게시판 이용 안내</S.GuideText>
          <ChevronDown size={16} color="#666"/>
        </S.GuideBox>

        {/* 카드 그리드 리스트 */}
        <S.CardGrid>
          {isLoading ? (
            <S.LoadingText>데이터를 불러오는 중입니다...</S.LoadingText>
          ) : animalList.length === 0 ? (
            <S.LoadingText>등록된 실종 신고가 없습니다.</S.LoadingText>
          ) : (
            animalList.map((item) => (
              <S.Card key={item.id}>
                <S.ImageContainer>
                  <S.CardImage src={item.imageUrl} alt={item.breed}/>
                </S.ImageContainer>
                <S.CardBody>
                  <S.InfoRow>
                    <S.StatusBadge status={item.status}>
                      {item.status}
                    </S.StatusBadge>
                    <S.BreedName>{item.breed}</S.BreedName>
                  </S.InfoRow>
                  <S.MetaInfo>
                    {item.gender} | {item.age} | {item.weight} | {item.color}
                  </S.MetaInfo>
                  <S.LocationRow>
                    <MapPin size={14} color="#666"/>
                    <S.MissingLocationText>
                      {item.rescueLocation}
                    </S.MissingLocationText>
                  </S.LocationRow>
                  <S.DateRow>
                    <Calendar size={14} color="#666"/>
                    <S.DateText>
                      {item.createdAt ? item.createdAt.substring(0, 10) : ""}
                    </S.DateText>
                  </S.DateRow>
                </S.CardBody>
              </S.Card>
            ))
          )}
        </S.CardGrid>

        {/* 글쓰기 플로팅 버튼 */}
        <S.FloatingWriteButton
        onClick={() => {
          setFormData({
            title: "",
            content: "",
            breed: "",
            gender: "수컷",
            age: "",
            weight: "",
            color: "",
            rescueLocation: "",
          });
          setSelectedFile(null);
          openModal("실종/제보 글쓰기", "등록하기", fetchData);
        }}>
          <Plus size={20} color="#fff"/>
          <span>글쓰기</span>
        </S.FloatingWriteButton>
      </S.Container>

      <Footer activeNo={3}/>
    </S.AppWraper>
  );
};