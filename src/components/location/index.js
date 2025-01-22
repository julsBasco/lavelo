import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'
import LocationMap from '../LocationModal/LocationModal'

import './style.css'

const Location = () => {

    const kingdomHallURL = ''

    return (


        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'When & Where'} />
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={strory1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Wedding Ceremony</h3>
                                    <span><b>Wednesday, 23 April 2025, 2.00 PM</b></span>
                                    <br />
                                    <span> Kingdom Hall of Jehovah's Witnesses</span>
                                    <span>1573 Velasquez Corner Pacheco St. Tondo Manila</span>

                                    <LocationMap buttonClass={'location-btn'} locationURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4469.002831678744!2d120.96364047564961!3d14.614117576744473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5f5157b8ba7%3A0x46f8e0bb5f9ae84e!2sKingdom%20Hall%20of%20Jehovah&#39;s%20Witnesses!5e1!3m2!1sen!2sph!4v1736850233880!5m2!1sen!2sph' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>Wedding Reception</h3>
                                <span><b>Wednesday, 23 April 2025, 5.00 PM</b></span>
                                <br />
                                <span>Betty's Sansrival Restaurant- 4th floor hall</span>
                                <span>101 M. Cuenco St. Cor Biak na bato, Quezon City</span>
                                <LocationMap buttonClass={'location-btn'} locationURL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4468.7403967785995!2d121.00565087564974!3d14.627015876428349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6146e334f23%3A0x2a2d1d0be2c42017!2sBetty&#39;s%20Sans%20rival%20%26%20Catering%20Service%20-%20Cuenco!5e1!3m2!1sen!2sph!4v1736850482001!5m2!1sen!2sph' />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Location;