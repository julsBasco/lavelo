import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'
import LocationMap from '../LocationModal/LocationModal'

import './style.css'

const Location = () => {
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
                                    <br/>
                                    <span> Kingdom Hall of Jehovah's Witnesses</span>
                                    <span>1573 Velasquez Corner Pacheco St. Tondo Manila</span>
                                   
                                    <LocationMap buttonClass={'location-btn'} />
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
                                <br/>
                                <span>Betty's Sansrival Restaurant- 4th floor hall</span>
                                <span>101 M. Cuenco St. Cor Biak na bato, Quezon City</span>
                                <LocationMap buttonClass={'location-btn'} />
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