import { type CommentXhr } from './';

export interface CreateCommentBody extends Omit<CommentXhr, 'id' | 'body'> {
  body?: string;
};

export const createComment = (body: CreateCommentBody): Promise<CommentXhr> => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
}