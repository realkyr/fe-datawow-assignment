'use client';

import React from 'react';
import TextField from '@/components/TextField';
import { PostType } from '@/shared-types/post';
import Post from '@/components/Post';
import { postTypeToPropsConvert } from '@/utils/convertor';

import CommunityDropdown from './_components/CommunityDropdown';
import CreateModal from './_components/CreateModal';

interface HomeProps {
  posts: PostType[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <TextField name="search" placeholder="Search" prefix="😀" />
        </div>

        <div className="col-span-2">
          <CommunityDropdown />
        </div>

        <div className="col-span-2">
          <CreateModal />
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 mt-4">
        {posts.map((post) => (
          <Post {...postTypeToPropsConvert(post)} />
        ))}
      </div>
    </>
  );
};

export default Home;
