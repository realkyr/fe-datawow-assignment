'use client';
import React from 'react';
import TextField from '@/components/TextField';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import TextArea from '@/components/TextArea';
import { FormFieldConfig } from '@/types';
import FormRenderer from '@/components/FormRenderer';

const fields: FormFieldConfig[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'TextField',
    placeholder: 'Enter your username',
    validate: (value) => (!value ? 'Username is required' : undefined),
  },
  {
    name: 'bio',
    label: 'Bio',
    type: 'TextArea',
    placeholder: 'Tell us about yourself',
    rows: 5,
    validate: (value) =>
      value && value.length < 10
        ? 'Bio must be at least 10 characters'
        : undefined,
  },
  {
    name: 'country',
    label: 'Country',
    type: 'Dropdown',
    options: [
      { value: 'usa', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'canada', label: 'Canada' },
    ],
    validate: (value) => (!value ? 'Country is required' : undefined),
  },
];

const Page = () => {
  const [dropdownValue, setDropdownValue] = React.useState('option1');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <h1 className="text-2xl font-bold">TextField</h1>
      <TextField name="name" label="Name" />

      <h1 className="text-2xl font-bold">TextArea</h1>
      <TextArea name="name" label="Name" />

      <h1 className="text-2xl font-bold">Dropdown</h1>
      <Dropdown
        name="dropdown"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        value={dropdownValue}
        onChange={setDropdownValue}
      />

      <h1 className="text-2xl font-bold">Button</h1>
      <div className="flex gap-2">
        <Button>Click me</Button>
        <Button loading>Click me</Button>
        <Button disabled>Click me</Button>
      </div>

      <h1 className="text-2xl font-bold">Modal</h1>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Modal
      </Button>

      <Modal isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <h1 className="text-2xl font-bold">Modal Content</h1>
        <p>Modal content goes here</p>
      </Modal>

      <h1 className="text-2xl font-bold">Form Renderer</h1>
      <FormRenderer
        initialValues={{
          username: '',
          bio: '',
          country: '',
        }}
        id={'form'}
        fields={fields}
        onSubmit={(data) => {
          console.log(data);
        }}
      />

      <Button form="form" type="submit">
        Submit
      </Button>
    </>
  );
};

export default Page;
