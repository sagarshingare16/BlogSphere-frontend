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

export const fetchBlogById = async (blogId) => {
  const response = await fetch(`http://localhost:8181/api/v1/blogs/get-blogById/${blogId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  const data = await response.json();
  console.log(data);
  return data;
};