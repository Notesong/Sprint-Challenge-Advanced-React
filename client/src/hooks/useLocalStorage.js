import { useState } from 'react';

export const useLocalStorage = (key, intialValue) => {
    // check for local storage 'key'. If it's there, set 'item' to
    // storedValue. Otherwise set to intialValue
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : intialValue;
    });

    const setValue = (value) => {
        // set the storedValue state to 'value'
        setStoredValue(value);
        // save 'value' to localStorage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
}