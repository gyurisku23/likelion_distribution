// src/api/productApi.js
import axios from './axios'; // axios 인스턴스 import

// GET: 상품 목록
export const fetchProducts = async (type = "shoes") => {
    console.log("GET 요청:", type);
    const response = await axios.get(`/${type}`);
    return response.data;
};

// POST: 상품 추가
export const addProduct = async (type, product) => {
    console.log("POST 요청:", type); // 요청 확인용
    const response = await axios.post(`/${type}`, product);
    return response.data;
};

// PUT: 전체 수정
export const updateProduct = async (type, id, product) => {
    console.log("PUT 요청:", type);
    const response = await axios.put(`/${type}/${id}`, product);
    return response.data;
};

// PATCH: 부분 수정
export const patchProduct = async (type, id, partial) => {
    console.log("PATCH 요청:", type);
    const response = await axios.patch(`/${type}/${id}`, partial);
    return response.data;
};

// DELETE: 삭제
export const deleteProduct = async (type, id) => {
    console.log("DELETE 요청:", type);
    const response = await axios.delete(`/${type}/${id}`);
    return response.data;
};
