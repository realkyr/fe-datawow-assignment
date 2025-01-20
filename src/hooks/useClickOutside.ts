import { RefObject, useEffect, useRef } from 'react';

/**
 * Hook to detect clicks outside a specified element.
 *
 * @param {function} onOutsideClick - Callback to trigger when clicking outside.
 * @returns {React.RefObject} - A ref to attach to the target element.
 */
export const useClickOutside = (
  onOutsideClick: () => void
): RefObject<HTMLElement | null> => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [onOutsideClick]);

  return ref;
};
