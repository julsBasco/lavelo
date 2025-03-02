import React, { useState } from 'react'
import { useDB } from '../FirebaseContexts/DBContext'
import './style.css'
import { useParams, useNavigate } from 'react-router-dom'

const MessageWall = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [submitLoading, setSubmitLoading] = useState(false)
    const { addComment } = useDB()
    let { id } = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const commentData = {
            name,
            email,
            comment,
            timestamp: new Date()
        }
        try {
            console.log(commentData, id)
            setSubmitLoading(true)
            await addComment(commentData)
            setSubmitLoading(false)
            setName('')
            setEmail('')
            setComment('') // Clear the input fields after submission
        } catch (error) {
            console.error('Error adding comment: ', error)
            setSubmitLoading(false)
        }
    }

    return (
        <div className="gift-area">
            <div className="container">
                <div className="row col-12 justify-content-center">
                    <div className="row section-title text-center">
                        <h2>Write a message to the couple</h2>
                    </div>
                    <div className="row col-10 align-items-center mb-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mt-5">
                                <label htmlFor="name">Your Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group mt-5">
                                <label htmlFor="comment">Your Comment:</label>
                                <textarea
                                    id="comment"
                                    className="form-control"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn mt-5 btn-primary">
                                {submitLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageWall