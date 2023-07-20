// src/components/Post.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { postUrl } from '../service/services';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(postUrl(postId))
            .then((response) => setPost(response.data))
            .catch((error) => console.error('Error fetching post', error));
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Post {postId}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
