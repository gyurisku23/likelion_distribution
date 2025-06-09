import styled from "styled-components";
import { useState } from "react";

export default function Toggle({ sortType, setSortType }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (type) => {
    setSortType(type);
    setOpen(false);
  };

  return (
    <ToggleContainer>
      <SelectedButton onClick={() => setOpen(!open)}>
        {sortType}
      </SelectedButton>

      {open && (
        <Dropdown>
          <ToggleText onClick={() => handleSelect("인기순")}>인기순</ToggleText>
          <ToggleText onClick={() => handleSelect("가격이 낮은 순")}>가격이 낮은 순</ToggleText>
          <ToggleText onClick={() => handleSelect("가격이 높은 순")}>가격이 높은 순</ToggleText>
        </Dropdown>
      )}
    </ToggleContainer>
  );
}

const SelectedButton = styled.p`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 6px;
`

const Dropdown = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  position: absolute;
  z-index: 1; /* 위에 겹치게 표시 */
`
const ToggleText=styled.p`
  padding: 10px 16px;
  font-size: 14px;
  background-color: white;
`
const ToggleContainer=styled.div`
display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: flex-end;   /* 오른쪽 정렬 (text-align 대신) */
  gap: 8px;  
`
