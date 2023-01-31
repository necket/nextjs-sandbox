export interface BlogPostXhr {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}