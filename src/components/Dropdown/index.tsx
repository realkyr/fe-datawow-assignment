import { DropdownContext, DropdownProvider } from './_context';
import React, {
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useClickOutside } from '@/hooks/useClickOutside';
import { classNames } from '@/utils';
import TextField from '@/components/TextField';
import { checkDropdownPosition } from '@/components/Dropdown/helper';

import { DropdownProps, Option, WithBottomVariableCSS } from './types';
import './dropdown.css';

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  allowSearch = false,
  label,
  error,
  width = '100%',
  message,
}) => {
  const { openDropdownId, setOpenDropdownId } =
    useContext(DropdownContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const id = useRef(`dropdown-${uuidv4()}`).current;

  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const [{ shouldDropdownTop, bottomOffset }, setDropdownPosition] = useState({
    shouldDropdownTop: false,
    bottomOffset: 0,
  });

  const setShouldDropdownTop = (
    _shouldDropdownTop: boolean,
    _bottomOffset: number
  ) => {
    setDropdownPosition({
      shouldDropdownTop: _shouldDropdownTop,
      bottomOffset: _bottomOffset,
    });
  };
  const toggleDropdown = () => {
    const shouldOpen = !isOpen;

    setIsOpen(shouldOpen);
    setOpenDropdownId && setOpenDropdownId(shouldOpen ? id : null);

    dropdownRef.current &&
      checkDropdownPosition(dropdownRef.current, setShouldDropdownTop);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setFilteredOptions(
      options.filter((option: Option) =>
        option.label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setSearchText('');
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const dropdownList = (
    <ul
      className={classNames([
        `absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`,
        shouldDropdownTop ? 'dropdown-top' : '',
      ])}
      style={
        {
          '--bottom': `${bottomOffset}px`,
        } as WithBottomVariableCSS
      }
      role="listbox"
    >
      {filteredOptions.map((option: Option) => (
        <li
          key={option.value}
          className="cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
          onClick={() => handleSelect(option.value)}
        >
          <span className="block truncate">{option.label}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div
        className="relative"
        style={{ width }}
        ref={dropdownRef as Ref<HTMLDivElement>}
      >
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <div className="relative mt-2">
          {allowSearch ? (
            <TextField
              placeholder={placeholder}
              value={searchText || value}
              onChange={handleSearch}
              onFocus={toggleDropdown}
              name={label || id}
            />
          ) : (
            <button
              type="button"
              className={`relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
                error ? 'ring-2 ring-red-500' : ''
              }`}
              onClick={toggleDropdown}
            >
              <span className="block truncate">
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          )}

          {isOpen && dropdownList}

          {error && message && (
            <span className="mt-1 text-sm text-red-500">{error}</span>
          )}
        </div>
      </div>
    </>
  );
};

export const DropdownWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => <DropdownProvider>{children}</DropdownProvider>;

export default Dropdown;
