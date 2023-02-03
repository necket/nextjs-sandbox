import { type CommentXhr } from './';
import { mapParamsToURLSearchParams } from '../helpers';

interface GetAllCommentsParams {
  postId: number;
}

export const getAllComments = (params: GetAllCommentsParams): Promise<CommentXhr[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/comments/?${mapParamsToURLSearchParams(params)}`).then((res) => res.json())
}