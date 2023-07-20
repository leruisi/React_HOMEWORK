

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const todosUrl = `${API_BASE_URL}/todos`;
export const albumsUrl = `${API_BASE_URL}/albums`;
export const commentsUrl = `${API_BASE_URL}/comments`;
export const postUrl = (postId) => `${API_BASE_URL}/posts/${postId}`;
