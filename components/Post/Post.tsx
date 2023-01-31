import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "reactstrap";

import postNoImage from '../../assets/images/post.png';
import styles from './Post.module.scss';
import { type BlogPostXhr } from '../../api';

interface Props extends Omit<BlogPostXhr, 'userId'> {
  imageUrl?: string;
  userId?: number;
}

export const Post = ({ id, title, body, imageUrl }: Props) => {
  return (
    <div className={styles.post}>
      <Row>
        <Col md={6}>
          <Image 
            src={imageUrl ?? postNoImage}
            alt="No image"
            className={styles.image}
            loading="lazy"
          />
        </Col>
        <Col md={6}>
          <div className={styles.content}>
            <div>
              <p className={styles.title}>
                {title}
              </p>
              <p className={styles.body}>
                {body}
              </p>
            </div>
            <Link href={`/posts/${id}`} className={styles.link}>
              Read more
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}