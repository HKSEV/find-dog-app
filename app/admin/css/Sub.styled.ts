import styled, { css } from "styled-components";

// 헤더
export const HeaderWrapper = styled.header`

`;


// 로고
export const LogoArea = styled.div`
  
`;


// 글씨로고 스타일
export const TextLogo = styled.span`
  
`;


// 이미지로고 스타일
export const ImageLogo = styled.img`
  
`;


//내비게이션 영역
export const NavMenu = styled.nav`

`;

export const MenuList = styled.ul`

`;

export const MenuItem = styled.li`

`;


// 서브메뉴 링크 스타일
export const MenuLink = styled.a`

`;


// 관리자
export const PageWrapper = styled.div`
  padding: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: #FFF;
  border: 1px solid #E3E6F0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.05);
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #4E73DF;
  margin-bottom: 15px;
  border-bottom: 1px solid #EEE;
  padding-bottom: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #555;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  max-width: 400px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  label {
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`;

export const MenuRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Button = styled.button<{
$variant?: "primary" | "danger" | "success"}>`
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;

  ${props => props.$variant === "danger" ?
    css `background-color: #E74A3B;` : props.$variant === "success" ?
    css `background-color: #1CC88A;` : css `background-color: #4E73DF;`
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const SaveButtonWrap = styled.div`
  text-align: right;
  margin-top: 20px;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const GridWrap3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const BlogImgWrap = styled.div`
  border: 1px solid #DDD;
  padding: 10px;
  text-align: center;
  position: relative;
`;

export const DivKey = styled.div`
  border: 1px solid #DDD;
  padding: 10px;
  text-align: center;
`;

export const BlogKey = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Relative = styled.div`
  position: relative;
  margin-bottom: 10px;
  height: 150px;
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

export const NoneImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #999;
`;

export const BottomInfo = styled.div`
  width: 100%;
  height: 200px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

export const MapPreview = styled.div`
  width: 100%;
  height: 400px;
  background-color: #EAEAEA;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
`;

export const BlogImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const FileUpload = styled.input`
  width: 100%;
  font-size: 12px;
`;

export const ButtonPrimary = styled(Button).attrs({$variant: "primary"})`
  padding: 10px 30px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 10px;
`;

export const Exit = styled(Button).attrs({$variant: "danger"})`
  position: absolute;
  top: 80%;
  right: 5%;
  padding: 4px 7px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
`;

export const TList = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  thead {
    tr {
      background-color: #F5F5F5;
      border-bottom: 2px solid #DDD;
      text-align: left;
      th { padding: 12px 8px; }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #EEE;
      td {
        padding: 12px 8px;
        font-size: 14px;
        color: #888;
      }
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 4px;
  resize: none;
`;

// layout
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #EEE;
  padding-bottom: 10px;

  h3 {
    font-size: 1.2rem;
    color: #4E73DF;
  }
`;

// 버튼
interface ColorBtnProps {
  $bgColor?: "red" | "yellow" | "green" | "purple";
};
// 선택된 색상에 따라 배경색을 반환하는 함수
const getBgColor = (color? :string) => {
  switch(color) {
    case "red":
      return "#DC3545";
    case "yellow":
      return "#FFC107";
      case "green":
        return "#28A745";
      case "purple":
        return "#6F42C1"
      default:
        return "#DC3545";
  };
};

// 선택된 색상에 따라 글자색을 반환하는 함수
const getTextColor = (color? :string) => {
  if (color === "yellow")
    return "#212529";
  return "#FFF"
};

export const ColorButton = styled.button<ColorBtnProps>`
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({$bgColor}) => getBgColor($bgColor)};
  color: ${({$bgColor}) => getTextColor($bgColor)};
  transition: opacity 0.2s ease-in-out;
  &:hover { opacity: 0.8; }
`;

// Typo
interface StatusProps {
  $statusColor?: "blue" | "red" | "green" | "gray";
};

const getStatusColor = (color?: string) => {
  switch(color) {
    case "red":
      return "#DC3545";
    case "blue":
      return "#0D6EFD";
    case "green":
      return "#28A745";
    case "gray":
      return "#808080"
    default:
      return "#DC3545";
  };
};

export const StatusText = styled.span<StatusProps>`
  color: ${({$statusColor}) => getStatusColor($statusColor)};
  font-weight: bold;
`;