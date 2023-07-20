// src/components/Comments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { commentsUrl } from '../service/services';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(commentsUrl)
            .then((response) => setComments(response.data))
            .catch((error) => console.error('Error fetching comments', error));
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.name} -{' '}
                        <Link to={`/post/${comment.postId}`}>View Post</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
