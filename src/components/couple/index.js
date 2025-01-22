import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/6.jpg'
import couple2 from '../../images/couple/5.jpg'
import couple3 from '../../images/couple/couple.jpg'
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
                            {/* <div className="col-lg-2 col-md-12 couple-single">
                                <div className="couple-img">
                                    <img src={couple3} alt="thumb" />
                                </div>
                            </div> */}
                            {/* <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb" />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Charmaine <span style={{ textDecoration: "line-through" }}>Calimpusan</span> Basco</h3>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="couple-text">
                                    <h4>Who do you think would cry at the wedding ceremony?</h4>
                                </div>
                                <div className="couple-text">
                                    <h4></h4>
                                </div>
                                <div className="couple-text">
                                    <h4>Who's the worry wart?</h4>
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