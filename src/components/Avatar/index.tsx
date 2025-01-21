import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export interface AvatarProps {
  image?: string; // URL of the avatar image
  name: string; // User's name
  lastActive?: Date | string; // Last active time
  namePosition?: 'left' | 'right'; // Position of the name
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  namePosition = 'right',
  name,
  lastActive,
}) => {
  const relativeTime = lastActive ? dayjs(lastActive).fromNow() : 'N/A';

  const nameComponent = (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-800">{name}</p>
      {lastActive && <p className="text-xs text-gray-500">{relativeTime}</p>}
    </div>
  );

  return (
    <div className="flex items-center space-x-2">
      {namePosition === 'left' && nameComponent}
      {/* Avatar Image or Placeholder */}
      <div className="relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
            {/* Placeholder Icon */}
            <span className="text-sm font-bold">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Name and Relative Time */}
      {namePosition === 'right' && nameComponent}
    </div>
  );
};

export default Avatar;
