import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  background-color: #F8F9FC;
`;

export const MainContent = styled.section`
  flex: 1 0 auto;
`;

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
`;