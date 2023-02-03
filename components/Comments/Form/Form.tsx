import React from 'react';
import { useFormik } from 'formik';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { Button } from '../../Button/Button';

import styles from './Form.module.scss';
import { type CreateCommentBody } from '../../../api';

interface Props {
  isLoading: boolean;
  onSubmit: (body: Omit<CreateCommentBody, 'postId'>) => void;
}

export const CreateForm = ({ isLoading, onSubmit }: Props) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      name: '',
      body: '',
    },
    onSubmit,
  });


  return (
    <div className={styles.form}>
      <p className={styles.form__title}>
        Add a comment:
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Title"
            value={values.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="body"
            name="body"
            type="textarea"
            placeholder="Enter your comment..."
            value={values.body}
            onChange={handleChange}
          />
        </FormGroup>
        <Button disabled={isLoading}>Submit</Button>
      </Form>
    </div>
  )
}
