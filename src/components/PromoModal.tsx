import React from 'react';

import s from '../styles/components/PromoModal.module.scss';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import AddFormButton from './AddFormButton';
import LogoUploaderPromo from './LogoUploaderPromo';

export type PromoFieldValues = {
  title: '';
  description: '';
  amount: '';
};

const initialValues: PromoFieldValues = {
  title: '',
  description: '',
  amount: '',
};

interface PromoModalProps {
  onClose: () => void;
}

export default function PromoModal({ onClose }: PromoModalProps) {
  const handleSubmit = () => {
    onClose();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s['form']}>
        <div className={s['main-wrapper']}>
          <InputField
            name="title"
            type="text"
            label="Title"
            placeholder="Title"
            required={true}
          />
          <InputField
            name="description"
            type="text"
            label="Description"
            placeholder="Description"
            required={true}
          />
          <InputField
            name="amount"
            type="text"
            label="Discount amount"
            placeholder="-40%"
            required={true}
          />
          <LogoUploaderPromo label="Image" placeholder="Upload photo" />
        </div>
        <AddFormButton content="Add promotion" />
      </Form>
    </Formik>
  );
}
