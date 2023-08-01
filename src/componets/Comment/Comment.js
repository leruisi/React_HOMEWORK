import axios from 'axios';
import React from "react";

class Comment extends React.Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                this.setState({ comments: response.data });
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    }

    render() {
        const { comments } = this.state;
        return (
            <div>
                <h2>Comments:</h2>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Comment