'use client';
import React from 'react';
import TextField from '@/components/TextField';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';

const Page = () => {
  const [dropdownValue, setDropdownValue] = React.useState('option1');

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
    </>
  );
};

export default Page;
