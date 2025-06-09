import styled from "styled-components";
import BagImg from "../assets/bag.png";
import GlassImg from "../assets/glass.png";
import ArrowImg from "../assets/arrow.png";

const clothings=["전체","상의","아우터","팬츠","원피스","니트/카디건","스커트","트레이닝","투피스/세트","비치웨어","임부복"];
const detailClothings=["전체","긴소매 티셔츠","반소매 티셔츠","셔츠","블라우스","니트/스웨터","맨투맨","후드","슬리브리스"];

export default function Header() {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <LeftSection>
          <Img src={ArrowImg} />
        </LeftSection>

        <CenterSection>
          <Title>의류</Title>
        </CenterSection>

        <RightSection>
          <Img src={GlassImg} />
          <Img src={BagImg} />
        </RightSection>
      </HeaderWrapper>

        <Clothing>
            {clothings.map(clothing => (
            <ClothingName key={clothing}>{clothing}</ClothingName>
            ))}
            </Clothing>

        <Detail>
            {detailClothings.map(detail => (
            <DetailText key={detail}>{detail}</DetailText>
            ))}
        </Detail>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Clothing = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ClothingName = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  transition: background-color 0.2s;
  color:rgb(145, 138, 138);
  &:hover {
    color: black;
  }
`;

const Detail = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;   /* 가로 가운데 정렬 */
  align-items: center;       /* 세로 가운데 정렬 (높이가 있을 경우 대비) */
  gap: 40px;                 /* 항목 간 간격 */
`;

const DetailText = styled.p`
  font-size: 16px;
  color: #333;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: relative;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const RightSection = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
`;

const Arrow = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;