import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import LocationMap from '../LocationModal/LocationModal'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p> Consequat elit non laboris deserunt amet excepteur. In cupidatat consectetur ad anim. Magna eu laborum est adipisicing duis excepteur Lorem id voluptate nostrud. </p>
                            <div className="btn"><AnchorLink href="#rsvp">RSVP</AnchorLink></div>
                            <LocationMap buttonClass={'location-btn'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;