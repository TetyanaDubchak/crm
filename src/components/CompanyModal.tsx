import React from 'react';

import s from '../styles/components/CompanyModal.module.scss';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import AddFormButton from './AddFormButton';
import LogoUploader from './LogoUploader';

export type CompanyFieldValues = {
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  categoryId: string;
  countryId: string;
};

const initialValues: CompanyFieldValues = {
  title: '',
  description: '',
  status: 'active',
  joinedDate: '',
  categoryId: '',
  countryId: '',
};

interface CompanyModalProps {
  onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyModal() {
  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s['form']}>
        <div className={s['main-wrapper']}>
          <div className={s['first-extra-wrapper']}>
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField type="text" label="Status" placeholder="Title" />
            <InputField type="text" label="Country" placeholder="Ukraine" />
          </div>
          <div className={s['second-extra-wrapper']}>
            <InputField type="text" label="Name" placeholder="Title" />
            <InputField
              type="text"
              label="Category"
              placeholder="Description"
            />
            <InputField
              type="text"
              label="Joined data"
              placeholder="14.02.2021"
            />
            <InputField type="text" label="Country" placeholder="Description" />
          </div>
        </div>
        <AddFormButton content="Add company" />
      </Form>
    </Formik>
  );
}
