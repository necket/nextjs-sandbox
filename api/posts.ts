import { type BlogPostXhr } from './';

export const getPostById = (postId: number): Promise<BlogPostXhr> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json())
}