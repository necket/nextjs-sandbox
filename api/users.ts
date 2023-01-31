import { type User } from './';

export const getUserById = (userId: number): Promise<User> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json())
}