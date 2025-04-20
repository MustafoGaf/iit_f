import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, defaultValue);
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  function setValue(newValue) {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
    setStoreValue(newValue);
  }
  return [storeValue, setValue];
}

export default useLocalStorage;
