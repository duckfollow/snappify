import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://api.snappy.at';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (apiKey: string): Promise<Post[]> => {
  try {
    const response: AxiosResponse<Post[]> = await axios.get(`${API_URL}/posts`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts: ${error}`);
  }
};