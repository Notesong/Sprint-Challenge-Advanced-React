import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    // check localStorage to see if there's already a key for dark mode
    // if there is, set dark mode based on the previous value. Otherwise
    // use the initialValue;
    const [value, setValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body');

    useEffect(() => {
        // add or remove the class based on whether 'value' is true or false
        if(value) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value])
    
    return [value, setValue];
}