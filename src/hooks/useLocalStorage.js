import { useEffect, useState } from "react";
// localStorage can only store strings, so we convert back from string → object/number/etc.

function useLocalStorage(key, defaultValue){
  const getValue = () => {
    const saved = localStorage.getItem(key); //checks the key in localstorage
    if(saved != null){
      //  it parses it from a string back to a real value (JSON.parse).
      return JSON.parse(saved);
    }
  return defaultValue;
}
const [value, setValue] = useState(getValue);

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

return [value, setValue];
}


export default useLocalStorage;
