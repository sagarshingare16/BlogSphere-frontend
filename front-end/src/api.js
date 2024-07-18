import axios from 'axios';

const apiUrl = 'http://localhost:8181/api/v1/blogs/all-blogs';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};