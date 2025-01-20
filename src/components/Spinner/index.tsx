import React, { FC } from 'react';

interface SpinnerProps {
  /** The width and height of the spinner (in px). Defaults to 24. */
  size?: number;
  /** The color of the faint background ring. A Tailwind color class. Defaults to `text-gray-200`. */
  trackColor?: string;
  /** The color of the rotating arc. A Tailwind color class. Defaults to `text-blue-600`. */
  indicatorColor?: string;
  /** The width of the stroke (arc thickness). Defaults to 4. */
  strokeWidth?: number;
  /** Optional Tailwind utility classes to further style or position the spinner. */
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({
  size = 24,
  trackColor = 'text-gray-200',
  indicatorColor = 'text-blue-600',
  strokeWidth = 4,
  className = '',
}) => {
  // Common circle props
  const circleProps = {
    cx: 12,
    cy: 12,
    r: 10,
    fill: 'none',
    strokeWidth: strokeWidth,
  };

  return (
    <svg
      className={`animate-spin ${className} overflow-hidden`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {/* Background circle (track) */}
      <circle
        className={`${trackColor} opacity-25`}
        stroke="currentColor"
        {...circleProps}
      />

      {/* Rotating arc (indicator) */}
      <circle
        className={`${indicatorColor} opacity-75`}
        stroke="currentColor"
        strokeLinecap="round"
        // Creates the arc effect. Adjust as desired:
        strokeDasharray="80"
        strokeDashoffset="60"
        {...circleProps}
      />
    </svg>
  );
};

export default Spinner;
