import styled from "styled-components";
import * as C from "../common/Common.styles"

export const AppWraper = styled.div`
  ${C.FlexCenter}
  background-color: #333;
  min-height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  background-color: ${C.White};
  position: relative;
  padding-bottom: 70px;
  ${C.BoxShadow}

  @media (${C.MainMaxWidth}) {
    width: 100%;
    box-shadow: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99999;
  // 화면 정중앙 배치 공식(내가 최대치의 크기를 정했을 때)
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;

  ${C.FlexBetween}
  background-color: ${C.White};

  max-width: 480px;

  @media (${C.MainMaxWidth}) {
    max-width: 480px;
  }
  @media (max-iwdth: 440px) {
    max-width: 440px;
  }
  @media (max-iwdth: 430px) {
    max-width: 430px;
  }
  @media (max-iwdth: 390px) {
    max-width: 390px;
  }
  @media (max-iwdth: 280px) {
    max-width: 280px;
  }
`;

export const Logo = styled.h4`
  margin: 0;
  font-weight: 700;
  color: #F28C28;
`;

export const Card = styled.div`
  background-color: ${C.White};
  border-radius: 0.75rem;
  overflow: hidden;
  ${C.BoxShadow}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

export const CardBody = styled.div`
  padding: 12px;
`;

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 0 0 4px 0;
  ${C.Ellipsis}
`;

export const CardDesc = styled.p`
  font-size: 11px;
  color: #6C757D;
  margin: 0;
  ${C.Ellipsis}
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px;
`;

interface ToggleProps{
  $active: boolean;
};
export const ToggleSwitch = styled.div<ToggleProps>`
  width: 2.75rem;
  height: 1.5rem;
  background-color: ${
    (props) => (props.$active ? "#FF6B00" : "#E4E5E7")
  };
  border-radius: 0.75rem;
  position: relative;
  cursor: pointer;
  ${C.TransitionAll}
`;
export const ToggleThumb = styled.div<ToggleProps>`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${C.White};
  border-radius: 50%;
  position: absolute;
  top: 0.125rem;
  left: ${(props) => (props.$active ? "1.375rem" : "0.125rem")};
  ${C.TransitionAll}
  ${C.BoxShadow}
`;

export const GuideBox = styled.div`
  ${C.FlexBetween}
  background-color: ${C.White};
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin: 0 1rem 1rem 1rem;
`;

export const GuideText = styled.span`
  flex: 1;
  font-size: 0.875rem;
  color: #444;
  margin-left: 0.5rem;
  font-weight: 500;
`;

export const InfoRow = styled.div`
  ${C.FlexCenter}
  gap: 0.375rem;
  margin-bottom: 0.25rem;
`;

interface StatusProps{
  status: string;
};
export const StatusBadge = styled.span<StatusProps>`
  background-color: ${
    (props) => (props.status === "실종" ? "#FF4D4F" : "#")
  };
  color: ${C.White};
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
`;

export const MetaInfo = styled.div`
  font-size: 0.6875rem;
  color: #666;
  margin-bottom: 0.5rem;
  ${C.Ellipsis}
`;

export const LocationRow = styled.div`
  ${C.FlexStart}
  gap: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const MissingLocationText = styled.span`
  font-size: 0.6875rem;
  color: #555;
  line-height: 1.2;
  ${C.WebkitBox}
  overflow: hidden;
`;

export const DateRow = styled.div`
  ${C.FlexCenter}
  gap: 0.25rem;
  margin-top: 0.375rem;
`;

export const DateText = styled.span`
  font-size: 0.625rem;
  color: #999;
  line-height: 1.2;
  ${C.WebkitBox}
  overflow: hidden;
`;

export const LoadingText = styled.span`
  text-align: center;
  grid-column: span 2;
  padding: 2.5rem;
  color: #888;
  font-size: 0.8rem;
`;

export const FloatingWriteButton = styled.button`
  position: absolute;
  bottom: 5rem;
  right: 1.25rem;
  background-color: #52C41A;
  color: ${C.White};
  border: none;
  border-radius: 1.875rem;
  padding: 0.6rem 1.2rem;
  ${C.FlexCenter}
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  ${C.BoxShadow}
  cursor: pointer;
  z-index: 10;
`;

export const BottomNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  ${C.MainMaxWidth}
  margin: 0 auto;
  height: 3.75rem;
  background-color: ${C.White};
  border-top: 1px solid #EEE;
  ${C.FlexAround}
  z-index: 100;
`;

interface NavItemProps {
  $active?: boolean;
};
export const NavItem = styled.div<NavItemProps>`
  ${C.FlexColumn}
  gap: 0.125rem;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    color: ${
      (props) => (props.$active ? "#FF7A00" : "#888")
    };
    font-weight: ${(props) => (props.$active ? "700" : "400")};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  background-color: #EEE;
  overflow: hidden;
`;

export const BreedName = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
`;