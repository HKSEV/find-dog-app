"use client";

import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import * as S from "@/css/Style.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleText: string;
  submitText: string;
  onSuccess?: () => void;
};

export default function ModalSingle({
  isOpen, onClose, titleText, submitText, onSuccess
}: ModalProps) {
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
      const data = new FormData();
      data.append("dto", new Blob([JSON.stringify(formData)], {
        type: "application/json"
      }));
      if (selectedFile)
        data.append("file", selectedFile);

      await axios.post("/api/missing-posts", formData, {
        headers: {"Content-Type":"application/json"},
        withCredentials: true
      });
      alert("실종 신고가 등록되었습니다.");
      onSuccess!();
      onClose();
    } catch (err: any) {
      console.error("등록 실패: ", err);
      if (err.response && err.response.status === 401 || err.response.status === 403)
        alert("로그인이 만료되었거나 권한이 없습니다. 다시 로그인 해주세요.");
      else
        alert("글 등록에 실패했습니다.");
    };
  };

  if (!isOpen)
    return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeaderRow>
          <h2>{titleText}</h2>
          <S.ModalCloseButton onClick={onClose}>
            <X size={20}/>
          </S.ModalCloseButton>
        </S.ModalHeaderRow>

        <S.ModalForm onSubmit={handleSubmit}>
          <S.ModalInput
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          value={formData.title}
          onChange={handleChange}
          required/>

          <S.ModalInput
          type="text"
          name="breed"
          placeholder="품종을 입력하세요"
          value={formData.breed}
          onChange={handleChange}
          required/>

          <S.ModalSelect
          name="gender"
          value={formData.gender}
          onChange={handleChange}>
            <option value="수컷">수컷</option>
            <option value="암컷">암컷</option>
            <option value="미상">미상</option>
          </S.ModalSelect>

          <S.ModalInput
          type="text"
          name="age"
          placeholder="나이를 입력하세요"
          value={formData.age}
          onChange={handleChange}
          required/>

          <S.ModalInput
          type="text"
          name="weight"
          placeholder="몸무게를 입력하세요"
          value={formData.weight}
          onChange={handleChange}
          required/>

          <S.ModalInput
          type="text"
          name="color"
          placeholder="털색을 입력하세요"
          value={formData.color}
          onChange={handleChange}
          required/>

          <S.ModalInput
          type="text"
          name="rescueLocation"
          placeholder="실종/목격 장소를 입력하세요"
          value={formData.rescueLocation}
          onChange={handleChange}
          required/>

          <S.ModalFileInputWrapper>
            <label>사진/동영상 첨부</label>
            <input
            type="file"
            accept="image/*, video/*"
            onChange={handleFileChange}/>
          </S.ModalFileInputWrapper>

          <S.ModalTextArea
          name="content"
          placeholder="상세 내용 및 특징을 입력하세요"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          required/>

          <S.ModalSubmitButton type="submit">
            {submitText}
          </S.ModalSubmitButton>
        </S.ModalForm>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};