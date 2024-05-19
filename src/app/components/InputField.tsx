'use client';

import { Field, FieldAttributes } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Pick<FieldAttributes<string>, 'as'> {
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, ...rest }) => (
  <div className="flex flex-col">
    {label && (
      <label htmlFor={id} className="mb-2 text-base text-gray-900">
        {label}
      </label>
    )}
    <Field
      {...rest}
      id={id}
      className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
    />
  </div>
);

export default InputField;
