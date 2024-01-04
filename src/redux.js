import { createSlice } from "@reduxjs/toolkit";


const phoneslice=createSlice({
    name:"phone",
    initialState :
    {list:[
        {
              "id": 1,
              "title": "Samsung Galaxy S21",
              "description": "The latest Samsung flagship with stunning features.",
              "price": 79999,
              "count":0,
              "discountPercentage": 10.5,
              "rating": 4.8,
              "stock": 50,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.ibb.co/dj9DCXT/samsung-galaxy-s21-5g-thumbnail.jpg",
              "images": [
                  "https://i.ibb.co/9bQgFkC/1.jpg",
                  "https://i.ibb.co/4R2YKKD/2.jpg",
                  "https://i.ibb.co/6nv9Qsy/3.jpg",
                  "https://i.ibb.co/k9ZkBhC/4.jpg",
                  "https://i.ibb.co/dj9DCXT/samsung-galaxy-s21-5g-thumbnail.jpg"
              ]
          },
          {
              "id": 2,
              "title": "Google Pixel 6",
              "description": "Google's latest Pixel phone with the best camera.",
              "price": 89999,
              "count":0,
              "discountPercentage": 15.2,
              "rating": 4.7,
              "stock": 30,
              "brand": "Google",
              "category": "smartphones",
              "thumbnail": "https://i.ibb.co/WkQM9HR/google-pixel-6-1.jpg",
              "images": [
                  "https://i.ibb.co/RgL0jsh/1.jpg",
                  "https://i.ibb.co/fp5qXtF/2.jpg",
                  "https://i.ibb.co/26qDVhc/3.jpg",
                  "https://i.ibb.co/WkQM9HR/google-pixel-6-1.jpg"
              ]
          },
          {
              "id": 3,
              "title": "OnePlus 9 Pro",
              "description": "The flagship killer with top-notch performance.",
              "price": 64999,
              "count":0,
              "discountPercentage": 12.5,
              "rating": 4.6,
              "stock": 40,
              "brand": "OnePlus",
              "category": "smartphones",
              "thumbnail": "https://i.ibb.co/vsDPq7F/oneplus-9-pro-thumbnail.jpg",
              "images": [
                  "https://i.ibb.co/T4fRS4c/1.jpg",
                  "https://i.ibb.co/fnTwTmr/2.jpg",
                  "https://i.ibb.co/9ZsvrZK/3.jpg",
                  "https://i.ibb.co/vsDPq7F/oneplus-9-pro-thumbnail.jpg"
              ]
          },
          {
              "id": 4,
              "title": "iPhone 13",
              "description": "The latest iPhone with impressive features.",
              "price": 89999,
              "count":0,
              "discountPercentage": 10.0,
              "rating": 4.9,
              "stock": 25,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.ibb.co/wJ8X8X2/apple-iphone-13-thumbnail.jpg",
              "images": [
                  "https://i.ibb.co/x7Ds0vV/1.jpg",
                  "https://i.ibb.co/sPwqS78/2.jpg",
                  "https://i.ibb.co/51BjjCx/3.jpg",
                  "https://i.ibb.co/wJ8X8X2/apple-iphone-13-thumbnail.jpg"
              ]
          },
          {
              "id": 5,
              "title": "Xiaomi Redmi Note 10",
              "description": "A budget-friendly Xiaomi phone with great features.",
              "price": 14999,
              "count": 0,
              "discountPercentage": 8.5,
              "rating": 4.5,
              "stock": 60,
              "brand": "Xiaomi",
              "category": "smartphones",
              "thumbnail": "https://i.ibb.co/5WBvYJj/xiaomi-redmi-note10-thumbnail.jpg",
              "images": [
                  "https://i.ibb.co/WH4bJXW/1.jpg",
                  "https://i.ibb.co/mFvc0fD/2.jpg",
                  "https://i.ibb.co/NFn7gnV/3.jpg"
              ],
              
          }
      ]},
    reducers:{
       deletefunction : function(state,action){
        state.list=state.list.filter((val,idx)=>val.id !==action.payload.id)
        
        
       },
       handlecountinc : function(state,action){
        state.phone=state.list.map((value)=>{if(value.id == action.payload.id){
             value.count += +1
        }} )
       },
       handlecountdec : function(state,action){
        state.phone=state.list.map((value)=>{if(value.id == action.payload.id){
             value.count -= +1
        }} )
       },
      
       
        }
    })
export const {deletefunction,handlecountinc,handlecountdec}=phoneslice.actions
export default phoneslice.reducer
