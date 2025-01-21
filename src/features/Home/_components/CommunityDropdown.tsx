'use client';

import React from 'react';
import Dropdown from '@/components/Dropdown';

const CommunityDropdown = () => {
  const [community, setCommunity] = React.useState('');

  return (
    <Dropdown
      name="community"
      options={[
        {
          label: 'React',
          value: 'react',
        },
        {
          label: 'Vue',
          value: 'vue',
        },
        {
          label: 'Angular',
          value: 'angular',
        },
      ]}
      value={community}
      onChange={setCommunity}
    />
  );
};

export default CommunityDropdown;
