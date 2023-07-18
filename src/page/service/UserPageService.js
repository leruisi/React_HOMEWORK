import axios from 'axios';

const API_BASE_URL = 'http://jsonplaceholder.typicode.com/user'; // Змінив 'http' на 'https'

const UserPageService = {
    createUser: async (userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users`, userData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    },
};

export default UserPageService;
