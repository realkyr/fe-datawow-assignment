import React from 'react';
import { Field, FieldProps, Formik, Form, FormikValues } from 'formik';

import Dropdown from '../Dropdown'; // Import your Dropdown component
import TextField from '../TextField'; // Import your TextField component
import TextArea from '../TextArea';
import { FormFieldConfig } from '@/types'; // Import your TextArea component

interface FormRendererProps<T> {
  id: string;
  initialValues: T;
  fields: FormFieldConfig[];
  onSubmit: (values: T) => void;
}

const FormRenderer = <T extends FormikValues>({
  id,
  initialValues,
  fields,
  onSubmit,
}: FormRendererProps<T>) => {
  return (
    <Formik<T> initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form id={id} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <Field name={field.name} validate={field.validate}>
                {({ field: formikField }: FieldProps) => {
                  switch (field.type) {
                    case 'TextField':
                      return (
                        <TextField
                          name={field.name}
                          label={field.label}
                          value={formikField.value}
                          placeholder={field.placeholder}
                          onChange={(e) => formikField.onChange(e)}
                          onFocus={field.onFocus}
                          error={!!errors[field.name] && !!touched[field.name]}
                          message={errors[field.name] as string}
                        />
                      );
                    case 'TextArea':
                      return (
                        <TextArea
                          name={field.name}
                          label={field.label}
                          value={formikField.value}
                          placeholder={field.placeholder}
                          onChange={formikField.onChange}
                          rows={field.rows}
                          error={!!errors[field.name] && !!touched[field.name]}
                          message={errors[field.name] as string}
                        />
                      );
                    case 'Dropdown':
                      return (
                        <Dropdown
                          name={field.name}
                          label={field.label}
                          value={formikField.value}
                          options={field.options || []}
                          onChange={(value) =>
                            formikField.onChange({
                              target: { value, name: field.name },
                            })
                          }
                          error={!!errors[field.name] && !!touched[field.name]}
                          message={errors[field.name] as string}
                        />
                      );
                    default:
                      return null;
                  }
                }}
              </Field>
            </div>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default FormRenderer;
