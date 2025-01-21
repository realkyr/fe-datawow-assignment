import { CommunityType } from '@/shared-types/post';

export const communityDropdown: { label: string; value: CommunityType }[] = [
  { label: 'History', value: CommunityType.History },
  { label: 'Food', value: CommunityType.Food },
  { label: 'Pets', value: CommunityType.Pets },
  { label: 'Health', value: CommunityType.Health },
  { label: 'Fashion', value: CommunityType.Fashion },
  { label: 'Exercise', value: CommunityType.Exercise },
  { label: 'Others', value: CommunityType.Others },
];
