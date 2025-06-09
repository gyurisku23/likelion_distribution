import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import Toggle from "../Toggle";
import { useEffect, useState } from 'react';
import { fetchProducts, addProduct } from '../../api/productApi';

export default function MainPage() {
  const [sortType, setSortType] = useState("인기순");
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("shoes"); // "shoes" 또는 "clothes" 선택

  const loadData = async () => {
    console.log("데이터 불러오는 중:", type);
    try {
      const data = await fetchProducts(type);
      console.log("데이터 로드 성공:", data);
      setProducts(data);
    } catch (err) {
      console.error("데이터 로드 실패:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, [type]);

  // 정렬
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "가격이 낮은 순") return a.price - b.price;
    if (sortType === "가격이 높은 순") return b.price - a.price;
    return a.id - b.id; // 기본 정렬
  });

  // 제대로 작동하는지 확인하기 위해 추가
  const handleAddProduct = async () => {
    const newProduct = {
      name: "새 상품",
      price: 99900,
      image: "https://example.com/image.jpg",
      rating: 0,
      reviews: 0,
      soldout: false,
      color: "red",
      size: "M",
      gender: "unisex",
      type: type === "clothes" ? "shirt" : null
    };

    try {
      const added = await addProduct(type, newProduct);
      console.log("추가된 상품:", added);
      setProducts(prev => [...prev, added]); // 실시간으로 반영
    } catch (err) {
      console.error("상품 추가 실패:", err);
      alert("상품 추가 실패: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <Wrapper>
      <TopBar>
        <FilterGroup>
          <Label><DeliveryButton type="checkbox" />직진배송</Label>
          <Label><DeliveryButton type="checkbox" />빠른출발</Label>
          <button onClick={() => setType("shoes")}>👟 Shoes</button>
          <button onClick={() => setType("clothes")}>👕 Clothes</button>
          <button onClick={handleAddProduct}>상품 추가</button>
        </FilterGroup>
        <Toggle sortType={sortType} setSortType={setSortType} />
      </TopBar>

      <ProductList>
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            brand={product.brand}
            isNew={product.isNew}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}


const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Label = styled.label`
  margin-right: 16px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const DeliveryButton = styled.input`
  width: 18px;
  height: 18px;
`;
const Wrapper = styled.div`
align-items:center;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
`;
