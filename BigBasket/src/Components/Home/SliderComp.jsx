
import {Box,Image} from '@chakra-ui/react'

import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e1e1e1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e1e1e1" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
 };
    return (
      <Box h={'auto'} w='100%' m={'auto'} mt='35px' mb="35px" >
        
        <Slider {...settings}>
        <Box>
           <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251222_400.jpg' w='100%' border="1px solid #e1e1e1" />
           </Box>
           <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251222_400.jpg' w='100%' border="1px solid #e1e1e1"/>
          </Box>
          <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251222_400.jpg' w='100%' border="1px solid #e1e1e1" />
          </Box>
           <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251222_400.jpg' w='100%' border="1px solid #e1e1e1"/>
          </Box>
        </Slider>
      </Box>
    );
  }
}
