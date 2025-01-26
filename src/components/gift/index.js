import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'


class Gift extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="gift-area">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Gift Registration</h2>
              <p>Your presence and prayers are the best gifts for us.
                However, if you desire to give, a monetary gift will be helpful as we begin our new life of service together
              </p>
            </div>
          </div>
          <div className="row justify-content-center" >
            <p> Name: Julian Rexor Basco</p>
            <p> GCASH: 09282759238</p>
            <p> UNIONBANK: 109485446010</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;