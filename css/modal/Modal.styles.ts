import styled from "styled-components";
import * as C from "../common/Common.styles";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  ${C.FlexCenter}
  z-index: 1000;
`;
export const ModalContent = styled.div`
  background-color: ${C.White};
  padding: 24px;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  ${C.BoxShadow}
`;
export const ModalHeaderRow = styled.div`
  ${C.FlexBetween}
  margin-bottom: 1.25rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #333;
    margin: 0;
  }
`;
export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.25rem;
  ${C.FlexCenter}
`;
export const ModalForm = styled.form`
  ${C.FlexColumn}
  width: 100%;
  gap: 0.75rem;
`;
export const ModalSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #E1E1E1;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  background-color: ${C.White};
  outline: none;
  cursor: pointer;
`;
export const ModalTextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #E1E1E1;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  font-family: inherit;
  ${C.TransitionAll}
  &:focus { border-color: #FF6B6B; }
`;
export const ModalSubmitButton = styled.button`
  background-color: #FF6B6B;
  color: ${C.White};
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  ${C.TransitionAll}
  &:hover {background-color: #FA5252;}
`;
export const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #E1E1E1;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  outline: none;
  ${C.TransitionAll}
  &:focus { border-color: #FF6B6B; }
`;
export const ModalFileInputWrapper = styled.div`
  ${C.FlexColumn}
  gap: 0.375rem;
  
  label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #555;
  }

  input[type="file"] {
    padding: 0.5rem;
    border: 1px solid #E1E1E1;
    font-size: 0.8rem;
    background-color: #FAFAFA;
  }
`;