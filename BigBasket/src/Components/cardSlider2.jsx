
import { Heading } from "@chakra-ui/react";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import SingleCard from "./SingleCard/SingleCard";



const CardSlider2 = () => {
    const Data = [
        {
            "id": 26,
            "rating": 1.4,
            "name": "Onion - Organically Grown (Loose)",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/40023472_5-fresho-onion-organically-grown.jpg",
            "category": "Fresho",
            "Price": 41.19,
            "CartQuantity": 0
          },
          {
            "id": 27,
            "rating": 1.4,
            "name": "Ridge Gourd",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/10000175_15-fresho-ridge-gourd.jpg",
            "category": "Fresho",
            "Price": 43.5,
            "Weight": "1 kg - Rs 43.50",
            "CartQuantity": 0
          },
          {
            "id": 28,
            "rating": 3,
            "name": "Lemon (Loose)",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/10000335_15-fresho-lemon.jpg",
            "category": "Fresho",
            "Price": 91,
            "Weight": "1 kg - Rs 91.00",
            "CartQuantity": 0
          },
          {
            "id": 29,
            "rating": 5,
            "name": "Coconut - Medium",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
            "category": "Fresho",
            "Price": 24.5,
            "Weight": "4 - Rs 91.00",
            "CartQuantity": 0
          },
          {
            "id": 30,
            "rating": 4,
            "name": "Chilli - Green, Organically Grown (Loose)",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/50000514_5-fresho-chilli-green-organically-grown.jpg",
            "category": "Fresho",
            "Price": 113.5,
            "Weight": "1 kg - Rs 113.50",
            "CartQuantity": 0
          },
        {
            "id": 22,
            "rating": 4,
            "name": "Beetroot (Loose)",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/10000045_18-fresho-beetroot.jpg",
            "category": "Fresho",
            "Price": 24.5,
            "Weight": "1 kg - Rs 24.50",
            "CartQuantity": 0
          },
          {
            "id": 23,
            "rating": 3.5,
            "name": "Broccoli",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/10000063_20-fresho-broccoli.jpg",
            "category": "Fresho",
            "Price": 32,
            "Weight": "1 pc (Approx. 250g-500g) - Rs 32.00",
            "CartQuantity": 0
          },
          {
            "id": 24,
            "rating": 4.5,
            "name": "Ginger - Organically Grown (Loose)",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/40023480_4-fresho-ginger-organically-grown.jpg",
            "category": "Fresho",
            "Price": 31.21,
            "Weight": "250 g - Rs 31.21",
            "CartQuantity": 0
          },
          {
            "id": 25,
            "rating": 1,
            "name": "Blueberry",
            "Image": "https://www.bigbasket.com/media/uploads/p/s/30009286_7-fresho-blueberry.jpg",
            "category": "Fresho",
            "Price": 198,
            "CartQuantity": 0
          }  
    ]
    console.log(Data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div>
        <Heading mt ='10'>Best Seller</Heading>
        <Slider {...settings}>
         {Data.map((el)=> {
            return (
                <SingleCard
                id = {el.id}
                key = {el.id}  
                name = {el.name}
                image = {el.Image}
                Price = {el.Price}
                Category = {el.category}
                Weights = {el.Weight}
                rating = {el.rating}
                CartQuantity ={el.CartQuantity}
               />
            )
         })}
        </Slider>
      </div>
    )
}

export { CardSlider2 }