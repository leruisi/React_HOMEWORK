import axios from 'axios';

const API_BASE_URL = 'http://jsonplaceholder.typicode.com/comment';
const CommentService = {
    createComment: async (commentData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/comments`, commentData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to create comment');
        }
    },
};

export { CommentService};