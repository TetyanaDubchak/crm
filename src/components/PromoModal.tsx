import React from 'react';

import s from '../styles/components/PromoModal.module.scss';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import AddFormButton from './AddFormButton';
import LogoUploader from './LogoUploader';
import LogoUploaderPromo from './LogoUploaderPromo';

export type PromoFieldValues = {
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  categoryId: string;
  countryId: string;
};

const initialValues: PromoFieldValues = {
  title: '',
  description: '',
  status: 'active',
  joinedDate: '',
  categoryId: '',
  countryId: '',
};

interface PromoModalProps {
  onSubmit?: (values: PromoFieldValues) => void | Promise<void>;
}

export default function PromoModal() {
  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s['form']}>
        <div className={s['main-wrapper']}>
          <InputField type="text" label="Title" placeholder="Title" />
          <InputField
            type="text"
            label="Description"
            placeholder="Description"
          />
          <InputField type="text" label="Discount amount" placeholder="-40%" />
          <LogoUploaderPromo label="Image" placeholder="Upload photo" />
        </div>
        <AddFormButton content="Add promotion" />
      </Form>
    </Formik>
  );
}
