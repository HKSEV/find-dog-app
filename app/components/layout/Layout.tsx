"use client"

import { Sidebar } from "../sidebar/Sidebar";
import { Topbar } from "../topbar/Topbar";
import { Wrapper, ContentWrapper, MainContent, ContainerFluid } from "./layout.styled";

interface LayoutProps {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Wrapper id="wrapper">
      <Sidebar/>
      <ContentWrapper id="content-wrapper">
        <MainContent id="content">
          <Topbar/>
          <ContainerFluid>
              {children}
          </ContainerFluid>
        </MainContent>
      </ContentWrapper>
    </Wrapper>
  );
};