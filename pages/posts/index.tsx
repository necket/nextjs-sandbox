import { ReactElement } from "react";

import { Layout } from "../../components/Layout/Layout";
import { getAllPosts, type BlogPostXhr } from '../../api';
import { Post } from "../../components/Post/Post";

interface Props {
  posts: BlogPostXhr[];
}

const Page = ({ posts }: Props) => {
  return (
    <>
      {posts.map(({ id, userId, title, body }) => (
        <Post key={id} id={id} userId={userId} title={title} body={body} />
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts }
  }
}

Page.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page;