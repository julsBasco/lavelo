
import React, { useState, useEffect, useCallback } from 'react'
import { useDB } from '../FirebaseContexts/DBContext'
import './style.css'
import { useParams, useNavigate } from 'react-router-dom'



const Rsvp = () => {
    const [isLoading, setLoading] = useState(true)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [rsvp, setRsvp] = useState([])
    const [selectedOption, setSelectedOption] = useState(null);
    const { fetchRSVP, updateRSVP } = useDB();
    let { id } = useParams();
    let navigate = useNavigate()

    const fetchRSVPs = useCallback(async () => {
        const getRSVP = await fetchRSVP(id);

        setRsvp(getRSVP)

        setLoading(false)
    }, [fetchRSVP])

    const handleCheckboxChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let rsvpResponse = {};

        if (selectedOption === 'option1') {
            rsvpResponse = {
                ceremony: true,
                reception: true,
                zoom: false
            }
        }
        if (selectedOption === 'option2') {
            rsvpResponse = {
                ceremony: true,
                reception: false,
                zoom: false
            }
        }
        if (selectedOption === 'option2') {
            rsvpResponse = {
                ceremony: false,
                reception: false,
                zoom: true
            }
        }
        try {
            setSubmitLoading(true)
            updateRSVP(id, rsvpResponse)
            setTimeout(() => {
                setSubmitLoading(false)
                navigate('/')
            }, 1000)
        } catch {
            setSubmitLoading(false)
        }

    }
    useEffect(() => {
        fetchRSVPs()
    }, [])



    return (
        <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
            {isLoading ? <h2></h2> : <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="rsvp-wrap">
                            <div className="col-12">
                                <div className="section-title section-title4 text-center">
                                    <h2>Be Our Guest</h2>
                                    <p>Please reserve before April 23rd, 2025.</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="contact-form form-style">
                                    {rsvp ? rsvp.spiel : <></>}
                                    {submitLoading ? <div className='text-center mt-5'>Your Response is submitted</div> : <div>
                                        <div>
                                            <input
                                                className="checkbox-style"
                                                type="checkbox"
                                                id="option1"
                                                checked={selectedOption === 'option1'}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="option1">
                                                We accept the invitation (Ceremony Only and Reception)
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="checkbox-style"
                                                type="checkbox"
                                                id="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="option2">
                                                We accept the invitation (Ceremony Only)
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="checkbox-style"
                                                type="checkbox"
                                                id="option3"
                                                checked={selectedOption === 'option3'}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" htmlFor="option3">
                                                No we can't make it in person (Please send zoom invite)
                                            </label>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button id="submit" type="submit" className="submit">Send Invitation</button>
                                        </div>
                                    </div>}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}

        </div>

    )
}

export default Rsvp


