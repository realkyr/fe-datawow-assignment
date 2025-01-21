import { Dayjs } from 'dayjs';

export interface Post {
  updatedAt: Dayjs;
  createdAt: Dayjs;
  topic: string;
  content: string;
  commentsAmount: number;
  createdBy: string;
  community: string;
}
