import { useRef, useEffect } from 'react';

type UsePreviousReturn<T> = T | undefined;

const usePrevious = <T>(value: T): UsePreviousReturn<T> => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
