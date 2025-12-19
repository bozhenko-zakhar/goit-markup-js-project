import { dataStorage } from "./product-refs";
const BASE_URL = 'https://paw-hut.b.goit.study';
const ENDPOINTS = {
    CATEGORIES: '/api/categories',
    PRODUCTS: '/api/animals',
};

import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
    const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
    return data;
};

const currentPage = 1;

export const fetchAllProducts = async (page, limit) => {
    const { data } = await axios(`${ENDPOINTS.PRODUCTS}`, {
        params: {
            limit,
            page,
        },
    });
    // Save to dataStorage without duplicates
    data.animals.forEach(animal => {
        dataStorage.animals.set(animal._id, animal);
    });
    console.log(dataStorage);
    return data;
};

export const fetchProductsByCategory = async ({
    categoryId,
    page = 1,
    limit = 9,
    
}) => {
    
const { data } = await axios(`${ENDPOINTS.PRODUCTS}`, {
    params: {
        categoryId,
        page,
        limit,
    }
});
    // Save to dataStorage without duplicates
    data.animals.forEach(animal => {
        dataStorage.animals.set(animal._id, animal);
    });
    console.log(dataStorage);
    return data;
};