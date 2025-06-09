import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styled from "styled-components";

export default function RootLayout() {
  return (
    <ScaledWrapper>
      <Header />
      <Outlet />
    </ScaledWrapper>
  );
}

const ScaledWrapper = styled.div`
  // transform: scale(0.3);           // 80% 축소
  // transform-origin: top left;      // 왼쪽 위 기준
  // width: 125%;                     // 비율 보정 (100% / 0.8)
  // height: 125%;
`;