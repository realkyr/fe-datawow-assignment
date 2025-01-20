export type PropsWithoutError = {
  error?: false; // or ‘error?: false’
  message?: never; // or ‘message?: never’
};

export type PropsWithError = {
  error: true;
  message: string; // guaranteed because error is true
};

export type WithError<T> = (T & PropsWithError) | (T & PropsWithoutError);

export type BaseClassNameType = { className?: string };
