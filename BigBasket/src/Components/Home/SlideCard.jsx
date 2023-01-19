
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
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplaySpeed: 3000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
 };
    return (
      <Box h={'auto'} w='100%' m={'auto'} mt='140px' mb="15px" >
        
        <Slider {...settings}>
        <Box>
           <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_cmc_breakfast_460px-020122.jpg' w='100%' h={['200','400','500']} />
           </Box>
           <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_wedding-brida_EP_1600x460px-020122.jpg' w='100%' h={['200','400','500']}/>
          </Box>
          <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_160123_Bangalore.jpg' w='100%' h={['200','400','500']}  />
          </Box>
           <Box>
            <Image src='https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-160123.jpeg' w='100%' h={['200','400','500']}/>
          </Box>
          <Box>
            <Image  src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg' w='100%' h={['200','400','500']}/>
          </Box>
        </Slider>
      </Box>
    );
  }
}
