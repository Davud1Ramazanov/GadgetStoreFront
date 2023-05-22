import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer.js';
import '../Styles/Reviews.css';

function Reviews() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [comment, setComment] = useState([]);
    const [commentTitle, setCommentTitle] = useState('');
    const [commentText, setCommentText] = useState('');
    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
    };

    function getToken() {
        return sessionStorage.getItem('token');
    }

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://localhost:7108/api/Comments/GetComment',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setComment(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        fetch('https://localhost:7108/api/Managers/UserId', {
            headers: {
                Authorization: 'Bearer ' + getToken(),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to get user id');
                }
                return response.json();
            })
            .then((data) => {
                setUserName(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleAddComm = () => {
        axios({
            method: 'POST',
            url: 'https://localhost:7108/api/Comments/CreateComment',
            data: {
                "userName": userName,
                "title": commentTitle,
                "text": commentText,
                "stars": rating,
                "createdAt": new Date().toISOString()
            },
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                alert("Successful");
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDelComm = (comments) => {
        axios({
            method: 'POST',
            url: 'https://localhost:7108/api/Comments/DeleteComment',
            data: {
                "id": comments.id,
                "userName": userName,
                "title": commentTitle,
                "text": commentText,
                "stars": rating,
                "createdAt": new Date().toISOString()
            },
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                alert("Successful");
            })
            .catch(error => {
                console.error(error);
                alert("Error!");
            });
    }

    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <div className="reviews">
            <nav className="top-menu">
                <ul className="menu-main">
                <li id="phones"><Link to="/phones">Phones</Link></li>
                    <li><Link to="/laptops">Laptop</Link></li>
                    <li><Link to="/smartwatches">Smart Watch</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                </ul>
            </nav>

            <div className="commentaries">
                <h1>Commentaries</h1>
                {comment.length > 0 ? (
                    comment.map(comments => (
                        <div className="commentary-block" key={comments.id}>
                            <h3>{comments.title}</h3>
                            <label>User: {comments.userName}</label>
                            <p>Rating: {renderStars(comments.stars)}</p>
                            <p>Text: {comments.text}</p>
                            <p>Date: {comments.createAt}</p>
                            <button id='del-btn' onClick={() => handleDelComm(comments)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <h1>There are currently no comments here, but you can write your first review!</h1>
                )}
            </div>

            <div className="comments-card">
                <p>Selected rating: {renderStars(rating)}</p>
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className={value <= rating ? 'star filled' : 'star'}
                        onClick={() => handleStarClick(value)}
                    >
                        &#9733;
                    </span>
                ))}
                <label htmlFor="comment-title">Input comment title</label>
                <input
                    type="text"
                    id="comment-title"
                    maxLength={25}
                    value={commentTitle}
                    onChange={(e) => setCommentTitle(e.target.value)}
                />
                <label htmlFor="comment-text">Input comment text</label>
                <input
                    type="text"
                    id="comment-text"
                    maxLength={55}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button id='send-btn' onClick={handleAddComm}>Send comment</button>
            </div>
            <Footer />
        </div>
    );
}

export default Reviews;