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
  category: string;
  country: string;
};

const initialValues: CompanyFieldValues = {
  title: '',
  description: '',
  status: '',
  joinedDate: '',
  category: '',
  country: '',
};

interface CompanyModalProps {
  onClose: () => void;
}

export default function CompanyModal({ onClose }: CompanyModalProps) {
  const handleOnSubmit = () => {
    onClose();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      <Form className={s['form']}>
        <div className={s['main-wrapper']}>
          <div className={s['first-extra-wrapper']}>
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField
              name="status"
              type="text"
              label="Status"
              placeholder="Title"
              required={true}
            />
            <InputField
              name="country"
              type="text"
              label="Country"
              placeholder="Ukraine"
              required={true}
            />
          </div>
          <div className={s['second-extra-wrapper']}>
            <InputField
              name="title"
              type="text"
              label="Name"
              placeholder="Title"
              required={true}
            />
            <InputField
              name="category"
              type="text"
              label="Category"
              placeholder="Description"
              required={true}
            />
            <InputField
              name="joinedDate"
              type="text"
              label="Joined data"
              placeholder="14.02.2021"
              required={true}
            />
            <InputField
              name="description"
              type="text"
              label="Description"
              placeholder="Description"
              required={true}
            />
          </div>
        </div>
        <AddFormButton content="Add company" />
      </Form>
    </Formik>
  );
}
