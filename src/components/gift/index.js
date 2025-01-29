import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GcashLogo from '../../images/gcashlogo.png'
import UBlogo from '../../images/UBlogo.jpg'

import './style.css'


class Gift extends Component {
  render() {

    return (
      <div className="gift-area">
        <div className="container">
          <div className="row col-12 justify-content-center">
            <div className="section-title text-center">
              <h2>Gift Registration</h2>
              <p>Your presence and prayers are the best gifts for us.
                However, if you desire to give, a monetary gift will be helpful as we begin our new life of service together
              </p>
            </div>
            <div className="text-center mt-5 mb-5" >
              <p> Name: Julian Rexor Basco</p>
              <div className="">
                <p><span><img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={GcashLogo} /></span> Gcash: 09282759238</p>
                <p><span><img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={UBlogo} /></span>UnionBank: 109485446010</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Gift;