'use client';

import React from 'react';
import Dropdown from '@/components/Dropdown';
import { communityDropdown } from '@/utils/constants';

interface CommunityDropdownProps {
  community: string;
  setCommunity: (value: string) => void;
}

const CommunityDropdown = ({
  community,
  setCommunity,
}: CommunityDropdownProps) => {
  return (
    <Dropdown
      name="community"
      options={communityDropdown}
      value={community}
      onChange={setCommunity}
    />
  );
};

export default CommunityDropdown;
