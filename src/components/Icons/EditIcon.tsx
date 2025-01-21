import React from 'react';
import { BaseClassNameType } from '@/types';

const EditIcon = ({ className }: BaseClassNameType) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.26121 13.9084H14.2612M2.26123 13.9084H3.37759C3.70371 13.9084 3.86677 13.9084 4.02022 13.8715C4.15627 13.8389 4.28633 13.785 4.40563 13.7119C4.54018 13.6294 4.65548 13.5141 4.88609 13.2835L13.2612 4.90835C13.8135 4.35607 13.8135 3.46064 13.2612 2.90835C12.709 2.35607 11.8135 2.35607 11.2612 2.90835L2.88607 11.2835C2.65547 11.5141 2.54017 11.6294 2.45771 11.764C2.38461 11.8833 2.33073 12.0133 2.29807 12.1494C2.26123 12.3028 2.26123 12.4659 2.26123 12.792V13.9084Z"
      stroke="#2B5F44"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default EditIcon;
