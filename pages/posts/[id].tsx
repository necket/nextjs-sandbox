import { ReactElement } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { Layout } from "../../components/Layout/Layout";
import { getAllPosts, getPostById, getUserById, type BlogPostXhr, type User } from '../../api';
import { Post } from "../../components/Post/Post";
import { Comments } from "../../components/Comments/Comments";

interface Params extends ParsedUrlQuery {
	id: string;
}

interface Props {
  post: BlogPostXhr;
  user: User;
}

const Page = ({ post: { id, userId, title, body }, user }: Props) => {
  return (
    <div>
      <Head>
        <title>{`Post #${id} - ${title}`}</title>
      </Head>
      <Post id={id} userId={userId} title={title} body={body} showReadMore={false} user={user}/>
      <Comments postId={id} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts ? posts.slice(0, 20).map(({ id }) => ({ params: { id: id.toString() } })) : [];

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) return {
		notFound: true,
	}

  const id = Number(params.id);
  const post = await getPostById(id);
  const user = await getUserById(post.userId);

  if (!post) return {
		notFound: true,
	}

  return { props: { post, user } }
}

Page.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page;