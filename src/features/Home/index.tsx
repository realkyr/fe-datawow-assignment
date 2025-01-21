'use client';

import React, { useEffect, useRef } from 'react';
import TextField from '@/components/TextField';
import { PostQuery, PostType } from '@/shared-types/post';
import Post from '@/components/Post';
import { postTypeToPropsConvert } from '@/utils/convertor';

import CommunityDropdown from './_components/CommunityDropdown';
import CreateModal from './_components/CreateModal';
import { getPostsService } from '@/services/post';
import Spinner from '@/components/Spinner';
import { useInfiniteList } from '@/hooks/useInfiniteList';
import useDebounceCallback from '@/hooks/useDebounceCallback';
import { useSearchParams } from 'next/navigation';
import useAuthentication from '@/hooks/useAuthentication';
import Link from 'next/link';

const INITIAL_QUERY: PostQuery = {
  limit: 10,
  page: 1,
  sortBy: 'updatedAt',
  orderBy: 'desc',
};

const Home = () => {
  const searchParams = useSearchParams();
  const { username } = useAuthentication();
  const {
    items: posts,
    isLoading,
    resetListData,
    loadNextPage,
    updateQuery,
    query,
  } = useInfiniteList({
    fetcherKey: 'getPostsService',
    initialQuery: INITIAL_QUERY,
    fetcher: getPostsService,
  });

  const mode = searchParams.get('mode');
  useEffect(() => {
    window.scrollTo(0, 0);
    if (mode === 'my-block' && username) {
      updateQuery({ createdBy: username });
    } else {
      updateQuery({ createdBy: undefined });
    }
  }, [mode, username]);

  const [updateQueryDebounce] = useDebounceCallback(updateQuery, 500);

  const onCreatePost = () => {
    // navigate user to top of the page
    window.scrollTo(0, 0);
    resetListData();
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || isLoading) return;

    // Check if the user scrolled near the bottom
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 100
    ) {
      loadNextPage();
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="h-screen overflow-auto"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <TextField
            onChange={(e) => {
              if (e.target.value.length > 2)
                updateQueryDebounce({ query: e.target.value });

              if (e.target.value.length === 0)
                updateQueryDebounce({ query: undefined });
            }}
            name="search"
            placeholder="Search"
            prefix="😀"
          />
        </div>

        <div className="col-span-2">
          <CommunityDropdown
            community={query.community || ''}
            setCommunity={(value) => {
              updateQuery({ community: value });
            }}
          />
        </div>

        <div className="col-span-2">
          <CreateModal onCreate={onCreatePost} />
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 mt-4">
        {posts.map((post) => (
          <Link href={'post/' + post.id}>
            <Post key={post.id} {...postTypeToPropsConvert(post)} />
          </Link>
        ))}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default Home;
