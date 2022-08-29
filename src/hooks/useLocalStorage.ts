import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // fetch from localStorage via function to ensure that process is invoked only once
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue != null) return JSON.parse(storedValue);

    if (typeof initialValue === 'function') {
      // invoke initial values since its a function
      (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
