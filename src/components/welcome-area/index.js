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
                            <h2>Welcome to Our Story</h2>
                            <p>We have created this wedding website as a convenient and interactive way to share all of the important details with you leading up to our wedding. We cannot wait to celebrate this exciting new chapter of our lives together with you.</p>
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