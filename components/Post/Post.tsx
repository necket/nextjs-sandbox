import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "reactstrap";

import postNoImage from '../../assets/images/post.png';
import styles from './Post.module.scss';

export const Post = () => {
  return (
    <div className={styles.post}>
      <Row>
        <Col md={6}>
          <Image 
            src={postNoImage}
            alt="No image"
            className={styles.image}
            loading="lazy"
          />
        </Col>
        <Col md={6}>
          <div className={styles.content}>
            <div>
              <p className={styles.title}>
                Lorem ipsum dolor sit amet
              </p>
              <p className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi fringilla tincidunt sapien sed varius. 
                Nam ut condimentum velit, eget gravida leo. 
                Etiam venenatis lacinia urna, ut accumsan turpis interdum sed. 
                Ut gravida vel tellus ac viverra. 
                Suspendisse urna urna, ornare eget convallis id, imperdiet et dui.
              </p>
            </div>
            <Link href="/" className={styles.link}>
              Read more
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}