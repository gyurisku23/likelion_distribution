import styled from "styled-components";
import HeartImg from "../assets/heart.png";

export default function ProductCard({ name, price, image, brand, isNew }) {
  return (
    <Card>
      <ImageWrapper>
        <ProductImage src={image} alt={name} />
        {isNew && <DeliveryMark>직진배송</DeliveryMark>}
        <HeartMark src={HeartImg} />
      </ImageWrapper>

      <ImageIntroduction>

        <ProductBrand>{brand}</ProductBrand>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price.toLocaleString()}원</ProductPrice>

      </ImageIntroduction>

      
    </Card>
  );
}
const HeartMark=styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 8px; 
  right: 8px;
  z-index: 2;
`
const DeliveryMark=styled.div`
  width: 60px;
  height: 28px;
  position: absolute;
  bottom: 4px;     
  z-index: 2;
  background-color: blue;
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageIntroduction=styled.div`
text-align: left;
margin: 15px; 
`
const ImageWrapper = styled.div`
  position: relative;
`;

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  width: 33%;
  margin: 1px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 360px; /* 고정 높이 지정 */

  border-radius: 6px;
`;


const ProductBrand = styled.p`
  font-weight: 500; /* 중간 정도 굵기 */
  font-size: 1rem;
`;

const ProductName = styled.h3`
  font-weight: 300; /* 가장 얇게 */
  font-size: 1.1rem;
  margin: 10px 0 5px;
  color: #444;
`;

const ProductPrice = styled.p`
  font-weight: 700; /* 가장 두껍게 */
  font-size: 1rem;
  color: #222;
`;