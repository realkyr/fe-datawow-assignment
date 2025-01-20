export type PropsWithoutError = {
  error?: boolean; // or ‘error?: false’
  message?: string; // or ‘message?: never’
};

export type WithError<T> = T & PropsWithoutError;

export type BaseClassNameType = { className?: string };

export * from './form';
