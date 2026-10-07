"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import ModalSingle from "../modal/ModalSingle";

// 1. 타입 정의
interface ModalConfig {
  isOpen: boolean;
  titleText: string;
  submitText: string;
  onSuccess?: () => void;
};

interface ModalContextType {
  modalConfig: ModalConfig;
  openModal: (
    titleText: string, submitText: string, onSuccess?: () => void
  ) => void;
  closeModal: () => void;
};

// 2. Context 생성
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Provider 컴포넌트 생성
export function ModalProvider({children}: {children: ReactNode}) {
  // 커스텀 팝업 관리 상태
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    isOpen: false,
    titleText: "",
    submitText: "",
    onSuccess: undefined as (() => void) | undefined,
  });

  // 팝업 열기 함수
  const openModal = (
    titleText: string,
    submitText: string,
    onSuccess?: () => void
  ) => {
    setModalConfig({isOpen: true, titleText, submitText, onSuccess});
  };

  // 팝업 닫기 함수
  const closeModal = () => {
    setModalConfig((prev) => ({...prev, isOpen: false}));
  };

  return (
    <ModalContext.Provider value={{modalConfig, openModal, closeModal}}>
      {children}
      {/* 커스텀 팝업 렌더링 */}
      <ModalSingle
      isOpen={modalConfig.isOpen}
      onClose={closeModal}
      titleText={modalConfig.titleText}
      submitText={modalConfig.submitText}
      onSuccess={modalConfig.onSuccess ? () => {
        modalConfig.onSuccess!();
      } : undefined}/>
    </ModalContext.Provider>
  );
};

// 4. Custom Hook 생성 (사용을 편하게 하기 위함)
export default function useModal() {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal must be used within a ModalProvider");
  return context;
};