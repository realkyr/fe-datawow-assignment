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
import {
  createPostDefaultValue,
  CreatePostForm,
} from '@/features/Home/_components/CreateModal/constants';
import SearchIcon from '@/components/Icons/SearchIcon';
import { classNames } from '@/utils';

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
    clearCache,
  } = useInfiniteList({
    fetcherKey: 'getPostsService',
    initialQuery: INITIAL_QUERY,
    fetcher: getPostsService,
  });

  const [defaultValue, setDefaultValue] = React.useState<CreatePostForm>(
    createPostDefaultValue
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const mode = searchParams.get('mode');
  useEffect(() => {
    window.scrollTo(0, 0);
    clearCache();
    if (mode === 'my-block' && username) {
      updateQuery({ createdBy: username });
    }

    // only call when finish fetch user data
    if (typeof username === 'string' && mode !== 'my-block') {
      updateQuery({ createdBy: undefined });
    }
  }, [mode, username]);

  const [updateQueryDebounce] = useDebounceCallback(updateQuery, 500);

  const onCreatePost = async () => {
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

  const onDeletePost = () => {
    // navigate user to top of the page
    window.scrollTo(0, 0);
    resetListData();
  };
  const [focusInput, setFocusInput] = React.useState<string | null>(null);

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="h-screen p-2 w-full md:w-[90%] overflow-auto"
    >
      <div className="grid grid-cols-12 gap-4 pt-8">
        <div
          className={classNames({
            'md:!col-span-8': true,
            'col-span-12': focusInput === 'search',
            'col-span-4': !focusInput,
          })}
        >
          <TextField
            onChange={(e) => {
              if (e.target.value.length > 2)
                updateQueryDebounce({ query: e.target.value });

              if (e.target.value.length === 0)
                updateQueryDebounce({ query: undefined });
            }}
            onFocus={() => setFocusInput('search')}
            onBlur={() => setFocusInput(null)}
            innerClassName="bg-gray-app-100 focus:ring-green-900 border-green-app-100"
            name="search"
            placeholder="Search"
            prefix={
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            }
          />
        </div>

        <div
          className={classNames({
            'col-span-4 md:col-span-2 md:!grid': true,
            hidden: focusInput === 'search',
          })}
        >
          <CommunityDropdown
            community={query.community || ''}
            setCommunity={(value) => {
              updateQuery({ community: value });
            }}
          />
        </div>

        <div
          className={classNames({
            'col-span-4 md:col-span-2 md:!grid': true,
            hidden: focusInput === 'search',
          })}
        >
          <CreateModal
            defaultValue={defaultValue}
            setDefaultValue={setDefaultValue}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            onCreate={onCreatePost}
          />
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 mt-4">
        {posts.map((post, i) => (
          <React.Fragment key={post.id}>
            <Post
              key={post.id}
              {...postTypeToPropsConvert(post)}
              onDelete={onDeletePost}
              onEdit={() => {
                setDefaultValue(post);
                setIsModalOpen(true);
              }}
            />

            {/* divider */}
            {i !== posts.length - 1 && <hr className="my-4" />}
          </React.Fragment>
        ))}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default Home;
