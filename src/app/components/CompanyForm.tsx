'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Form, Formik } from 'formik';
import { getCategories, getCountries, createCompany } from '@/lib/api';
import { CompanyStatus } from '@/models/company';
import StatusLabel from './StatusLabel';
import Button from './Button';
import InputField from './InputField';
import LogoUploader from './LogoUploader';
import mongoose from 'mongoose';

export type CompanyFieldValues = {
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  categoryId: string;
  countryId: string;
};

export interface CompanyFormProps {
  onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

// TODO: Add validation
const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 1000,
  });

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    staleTime: 10 * 1000,
  });

  const initialValues: CompanyFieldValues = {
    title: '',
    description: '',
    status: CompanyStatus.Active,
    joinedDate: '',
    categoryId:
      categories && categories.length > 0 ? (categories[0]._id as string) : '',
    countryId:
      countries && countries.length > 0 ? (countries[0]._id as string) : '',
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createCompany,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });

      router.push(`/companies/${data._id}`);
    },
    onError: (error) => {
      alert(`Error creating company: ${error.message}. Try reload the page.`);
    },
  });

  const handleSubmit = async (values: CompanyFieldValues) => {
    const categoryId = categories?.find(
      (category) => category._id === values.categoryId,
    )?._id as mongoose.Types.ObjectId;
    const countryId = countries?.find(
      (country) => country._id === values.countryId,
    )?._id as mongoose.Types.ObjectId;

    if (!categoryId || !countryId) {
      throw new Error('Country or Category not found');
    }

    await mutateAsync({
      ...values,
      category: categoryId,
      country: countryId,
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField
              required
              label="Status"
              placeholder="Status"
              name="status"
              as="select"
              id="status"
            >
              {(Object.values(CompanyStatus) as CompanyStatus[]).map(
                (status) => (
                  <option key={status} value={status}>
                    <StatusLabel status={status} />
                  </option>
                ),
              )}
            </InputField>
            <InputField
              required
              label="Country"
              placeholder="Country"
              name="countryId"
              as="select"
              id="countryId"
            >
              {countries?.map((country) => (
                <option
                  key={country._id as string}
                  value={country._id as string}
                >
                  {country.title}
                </option>
              ))}
            </InputField>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField
              required
              label="Name"
              placeholder="Name"
              name="title"
              id="title"
            />
            <InputField
              required
              label="Category"
              placeholder="Category"
              name="categoryId"
              as="select"
              id="categoryId"
            >
              {categories?.map((category) => (
                <option
                  key={category._id as string}
                  value={category._id as string}
                >
                  {category.title}
                </option>
              ))}
            </InputField>
            <InputField
              required
              label="Joined date"
              type="date"
              name="joinedDate"
              id="joinedDate"
            />
            <InputField
              required
              label="Description"
              placeholder="Description"
              name="description"
              id="description"
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Add company
        </Button>
      </Form>
    </Formik>
  );
};

export default CompanyForm;
