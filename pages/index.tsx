import { ReactElement } from 'react';
import { GetStaticProps } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { Row, Col } from "reactstrap";

import BookOpen from '../assets/icons/BookOpen.svg';
import FlowArrow from '../assets/icons/FlowArrow.svg';
import GraduationCap from '../assets/icons/GraduationCap.svg';
import Pen from '../assets/icons/Pen.svg';
import homeImage from '../assets/images/home.png';

import styles from '../styles/modules/Home.module.scss';
import { Layout } from '../components/Layout/Layout';
import { Post } from '../components/Post/Post';
import { getPostById, type BlogPostXhr } from '../api';

interface Props {
  post: BlogPostXhr;
}

const Page = ({ post }: Props) => {
  const renderPost = () => {
    const { id, title, body, userId } = post;

    return (
      <Post 
        id={id}
        title={title}
        body={body}
        userId={userId}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Blog - Home Page</title>
      </Head>

      <div className={styles.heading}>
        <h1>Lorem ipsum <strong>Blog</strong> sit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla</p>

        <Image 
          src={homeImage}
          alt="Home page image"
        />
      </div>

      <div className={styles.info}>
        <Row>
          <Col md={6} lg={5}>
            <div className={styles.info__main}>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi fringilla tincidunt sapien sed varius.
                Nam ut condimentum velit, eget gravida leo. Etiam venenatis lacinia urna
              </p>
            </div>
          </Col>
          <Col md={6} lg={7}>
            <div className={styles.info__blocks}>
              <Row>
                <Col lg={6}>
                  <span className={styles.info__blocks_one}>
                    <BookOpen />
                    <p>lorem ipsum</p>
                  </span>
                </Col>
                <Col lg={6}>
                  <span className={styles.info__blocks_two}>
                    <FlowArrow />
                    <p>lorem ipsum</p>
                  </span>
                </Col>
                <Col lg={6}>
                  <span className={styles.info__blocks_three}>
                    <GraduationCap />
                    <p>lorem ipsum</p>
                  </span>
                </Col>
                <Col lg={6}>
                  <span className={styles.info__blocks_four}>
                    <Pen />
                    <p>lorem ipsum</p>
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.bestPost}>
        <h2>Best Post of Month</h2>
        {renderPost()}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getPostById(1);

  return {
    props: { post }
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