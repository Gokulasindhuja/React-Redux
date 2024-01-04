import { createSlice } from "@reduxjs/toolkit";

const phoneslice = createSlice({
  name: "phone",
  initialState: {
    list: [
      {
        id: 1,
        title: "Samsung Galaxy S21",
        description: "The latest Samsung flagship with stunning features.",
        price: 79999, // Price in INR
        count: 0,
        discountPercentage: 10.5,
        rating: 4.8,
        stock: 50,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.example.com/s21/thumbnail.jpg",
        images: [
          "https://i.example.com/s21/1.jpg",
          "https://i.example.com/s21/2.jpg",
          "https://i.example.com/s21/3.jpg",
          "https://i.example.com/s21/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "Google Pixel 6",
        description: "Google's latest Pixel phone with the best camera.",
        price: 89999, // Price in INR
        count: 0,
        discountPercentage: 15.2,
        rating: 4.7,
        stock: 30,
        brand: "Google",
        category: "smartphones",
        thumbnail: "https://i.example.com/pixel6/thumbnail.jpg",
        images: [
          "https://i.example.com/pixel6/1.jpg",
          "https://i.example.com/pixel6/2.jpg",
          "https://i.example.com/pixel6/3.jpg",
          "https://i.example.com/pixel6/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "OnePlus 9 Pro",
        description: "The flagship killer with top-notch performance.",
        price: 64999, // Price in INR
        count: 0,
        discountPercentage: 12.5,
        rating: 4.6,
        stock: 40,
        brand: "OnePlus",
        category: "smartphones",
        thumbnail: "https://i.example.com/oneplus9pro/thumbnail.jpg",
        images: [
          "https://i.example.com/oneplus9pro/1.jpg",
          "https://i.example.com/oneplus9pro/2.jpg",
          "https://i.example.com/oneplus9pro/3.jpg",
          "https://i.example.com/oneplus9pro/thumbnail.jpg",
        ],
      },
      {
        id: 4,
        title: "iPhone 13",
        description: "The latest iPhone with impressive features.",
        price: 89999, // Price in INR
        count: 0,
        discountPercentage: 10.0,
        rating: 4.9,
        stock: 25,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.example.com/iphone13/thumbnail.jpg",
        images: [
          "https://i.example.com/iphone13/1.jpg",
          "https://i.example.com/iphone13/2.jpg",
          "https://i.example.com/iphone13/3.jpg",
          "https://i.example.com/iphone13/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Xiaomi Redmi Note 10",
        description: "A budget-friendly Xiaomi phone with great features.",
        price: 14999, // Price in INR
        count: 0,
        discountPercentage: 8.5,
        rating: 4.5,
        stock: 60,
        brand: "Xiaomi",
        category: "smartphones",
        thumbnail: "https://i.example.com/redminote10/thumbnail.jpg",
        images: [
          "https://i.example.com/redminote10/1.jpg",
          "https://i.example.com/redminote10/2.jpg",
          "https://i.example.com/redminote10/3.jpg",
          "https://i.example.com/redminote10/thumbnail.jpg",
        ],
      },
      // Add more phones as needed
    ],
  },
  reducers: {
    deletefunction: function (state, action) {
      state.list = state.list.filter((val) => val.id !== action.payload.id);
    },
    handlecountinc: function (state, action) {
      state.phone = state.list.map((value) => {
        if (value.id === action.payload.id) {
          value.count += 1;
        }
      });
    },
    handlecountdec: function (state, action) {
      state.phone = state.list.map((value) => {
        if (value.id === action
