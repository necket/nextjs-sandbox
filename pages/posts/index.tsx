import { ReactElement } from "react";
import Head from "next/head";

import { Layout } from "../../components/Layout/Layout";
import { getAllPosts, type BlogPostXhr } from '../../api';
import { Post } from "../../components/Post/Post";

interface Props {
  posts: BlogPostXhr[];
}

const Page = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog - All Posts</title>
      </Head>
      {posts.map(({ id, userId, title, body }) => (
        <Post key={id} id={id} userId={userId} title={title} body={body} />
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPosts();
  const posts = data.slice(0, 20);

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