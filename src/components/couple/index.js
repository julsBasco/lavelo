import React, { useEffect } from 'react'
import Sectiontitle from '../section-title'
import couple3 from '../../images/couple/couple.jpg'
import Poll from '../poll/Index.js'
import './style.css'



const Couple = () => {




    return (
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'The Cou-Poll'} />
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple3} alt="thumb" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="couple-text">
                                    <Poll question='Who do you think would cry at the wedding ceremony?' />
                                </div>
                                <div className="couple-text">
                                    <Poll question='Who is the worry wart?' />
                                </div>
                                <div className="couple-text">
                                    <Poll question='Who initiates the first date?' />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Couple;