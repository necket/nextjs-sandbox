import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Spinner } from 'reactstrap';

import { getAllComments, createComment, type CommentXhr, type CreateCommentBody } from '../../api';

import styles from './Comments.module.scss';
import { Comment } from './Comment/Comment';
import { CreateForm } from './Form/Form';

interface Props {
  postId: number;
}

export const Comments = ({ postId }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CommentXhr[]>([]);

  const getData = async () => {
    setIsLoading(true);
    const data = await getAllComments({ postId });
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = useCallback(async ({ email, name, body }: Omit<CreateCommentBody, 'postId'>) => {
    setIsSubmitting(true);
    const post = await createComment({ postId, email, name, body });
    setData((prevData) => [post, ...prevData]);
    setIsSubmitting(false);
  }, [postId]);

  const renderComments = () => {
    if (isLoading) return (
      <div className={styles.loading}>
        <div><Spinner /></div>
      </div>
    );

    if (data.length === 0) return (
      <div className={styles.noComments}>
        <p>There are no comments yet</p>
      </div>
    );

    return (
      <div className={styles.comments}>
        {data.map(({ id, name, body, email }) => (
          <Comment key={id} name={name} body={body} email={email}/>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Row>
        <Col lg={6}>
          <CreateForm isLoading={isSubmitting} onSubmit={handleSubmit}/>
        </Col>
        <Col lg={6}>
          {renderComments()}
        </Col>
      </Row>
    </div>
  )
}