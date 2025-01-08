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
                                        <span className="flaticon-birds-in-love"></span>
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
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/" title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
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
                                        <span className="date">August 2023</span>
                                        <p>Our first "Date" and getting interrogated by friends</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/" title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Marriage Proposal</h2>
                                        <span className="date">Jan 10, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/" title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
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
                                        <p>I find it difficult to find the right timing to ask Charmaine but with the help of friends, Jehovah God really know how to save people from trouble (haha) jokes aside its as if Jehovah make sure that I asked Charm in the right venue, time and people. </p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/" title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;