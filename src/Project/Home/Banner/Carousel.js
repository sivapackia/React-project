import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  './Carusel.css';


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };

    
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cd2a3b168574835.643d5448d899c.png" style={{height:"200px",width:"95%"}} alt=""/>
          </div>
          <div>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c65a80149683937.62ebbaba08be9.jpg" style={{height:"200px",width:"95%"}}   alt=""/>
          </div>
          <div>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9025c7135873351.61efb28f9cd15.jpg" style={{height:"200px",width:"95%"}}  alt=""/>
          </div>
          
        </Slider>
      </div>
    );
  }
}