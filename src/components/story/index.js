import React from 'react'
import { Link } from 'react-router-dom'
import strory1 from '../../images/story/1.JPG'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'


const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>How we met</h2>
                                        <span className="date">February 2023</span>
                                        <p>Charm and I met in the Philippine Branch Construction project.</p>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">

                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Knowing each other</h2>
                                        <span className="date">May 2024</span>
                                        <p>Our first "Date" and getting interrogated by friends</p>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">

                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Kami na!</h2>
                                        <span className="date">August 2024</span>
                                        <p>The "Ligawan" stage is over, when Charm give the approval </p>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">

                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>The Proposal</h2>
                                        <span className="date">October 2024</span>
                                        <p>I find it difficult to find the right timing to ask Charm but with the help of friends, Jehovah God really know how to save people from trouble (haha) jokes aside its as if Jehovah make sure that I asked Charm in the right venue, time and people. </p>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">

                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>The Wedding</h2>

                                        <div className='text-center'>

                                            <span className="date">April 2025</span>
                                            <p>See you there!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;