import React from "react";
import Image from "next/image";
import { Row, Col } from "reactstrap";

import postNoImage from '../../assets/images/post.png';
import styles from './Post.module.scss';
import { type BlogPostXhr, type User } from '../../api';
import { Button } from '../Button/Button';

interface Props extends Omit<BlogPostXhr, 'userId'> {
  imageUrl?: string;
  userId?: number;
  showReadMore?: boolean;
  user?: User
}

export const Post = ({ id, title, body, imageUrl, showReadMore = true, user }: Props) => {
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
            {
              user && (
                <div className={styles.createdBy}>
                  <p>
                    <strong>Created by:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${user.email}`} className={styles.createdBy__email}>{user.email}</a>
                  </p>
                </div>
              )
            }
            { 
              showReadMore && (
                <Button to={`/posts/${id}`}>
                  Read more
                </Button>
              )
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}