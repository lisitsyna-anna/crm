'use client';

import { Form, Formik } from 'formik';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPromotion, getCompany } from '@/lib/api';
import { Promotion } from '@/types';
import Button from './Button';
import InputField from './InputField';
import LogoUploader from './LogoUploader';

export type PromotionFieldValues = {
  title: string;
  description: string;
  discount: string | number;
};

export interface PromotionFormProps {
  companyId: string;
  onSubmit?: (values: PromotionFieldValues) => void | Promise<void>;
}

const initialValues: PromotionFieldValues = {
  title: '',
  description: '',
  discount: '',
};

const PromotionForm: React.FC<PromotionFormProps> = ({
  companyId,
  onSubmit,
}) => {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,
    onSuccess: (data) => {
      // TODO: Revisit this logic later, consider replacing invalidateQueries with setQueryData
      queryClient.invalidateQueries({
        queryKey: ['promotions', companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ['promotions'],
        exact: true,
      });

      // queryClient.setQueryData<Promotion[]>(
      //   ['promotions', companyId],
      //   (oldData) => {
      //     if (oldData) {
      //       return oldData.concat(data);
      //     }
      //   },
      // );

      // queryClient.setQueryData<Promotion[]>(['promotions'], (oldData) => {
      //   if (oldData) {
      //     return oldData.concat(data);
      //   }
      // });
    },
  });

  const handleSubmit = async (values: PromotionFieldValues) => {
    if (!company) {
      return;
    }

    await mutateAsync({
      ...values,
      discount: Number(values.discount) || 0,
      companyId: company.id,
      companyTitle: company.title,
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new promotion</p>
        <div className="flex flex-col gap-5">
          <InputField required label="Title" placeholder="Title" name="title" />
          <InputField
            required
            label="Description"
            placeholder="Description"
            name="description"
          />
          <InputField
            required
            type="number"
            label="Discount"
            placeholder="Discount"
            name="discount"
          />
          <LogoUploader square label="Image" placeholder="Upload photo" />
        </div>
        <Button type="submit" disabled={isPending}>
          Add promotion
        </Button>
      </Form>
    </Formik>
  );
};

export default PromotionForm;
