import React from 'react';

import { type CommentXhr } from '../../../api';
import styles from './Comment.module.scss';

type Props = Pick<CommentXhr, 'name' | 'body' | 'email'>

export const Comment = ({ name, body, email }: Props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__email}><span>{email}</span> commented:</div>
      <div className={styles.comment__content}>
        <div className={styles.comment__title}>{name}</div>
        <div>{body}</div>
      </div>
    </div>
  )
}