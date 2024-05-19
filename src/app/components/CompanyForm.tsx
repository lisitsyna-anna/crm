'use client';

import { Form, Formik } from 'formik';
import Button from './Button';
import InputField from './InputField';
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
  status: '',
  joinedDate: '',
  categoryId: '',
  countryId: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form className="flex flex-col gap-10">
      <p className="mb-0.5 text-xl">Add new company</p>
      <div className="flex gap-6">
        <div className="flex flex-col flex-1 gap-5">
          <LogoUploader label="Logo" placeholder="Upload photo" />
          <InputField label="Status" placeholder="Status" name="status" />
          <InputField label="Country" placeholder="Country" name="country" />
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <InputField label="Name" placeholder="Name" name="name" />
          <InputField label="Category" placeholder="Category" name="category" />
          <InputField label="Joined date" type="date" name="date" />
          <InputField
            label="Description"
            placeholder="Description"
            name="description"
          />
        </div>
      </div>
      <Button type="submit">Add company</Button>
    </Form>
  </Formik>
);

export default CompanyForm;
