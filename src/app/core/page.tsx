'use client';
import React from 'react';
import TextField from '@/components/TextField';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const Page = () => {
  const [dropdownValue, setDropdownValue] = React.useState('option1');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <h1 className="text-2xl font-bold">TextField</h1>
      <TextField name="name" label="Name" />

      <h1 className="text-2xl font-bold">Dropdown</h1>
      <Dropdown
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
    </>
  );
};

export default Page;
