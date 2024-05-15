'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './Button';
import { FastField } from 'formik';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalShow(true)}>Add Company</Button>
      <CompanyFormModal
        show={isModalShow}
        onClose={() => setIsModalShow(false)}
        onSubmit={() => console.log('Submit company form')}
      />
    </>
  );
};

export default AddCompanyButton;
