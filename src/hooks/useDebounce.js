import { useEffect, useState } from "react";
// useState to store the delayed (debounced) value.
// useEffect to run some logic when the value changes.

function useDebounce(value, delay){
  // change the state and tracking user input 
  const [debouncedValue , setDebouncedValue] = useState(value);
  // update after waiting = logic run 
  // timer run karega to update the debouncecdvalue
  useEffect(() => {
    const handler = setTimeout (()=>{
      setDebouncedValue(value);
    },delay);

    return () =>{
      clearTimeout(handler);
    } 
  }, [value, delay]);

  return debouncedValue;
}
export default useDebounce;


// we have to update the debounced value so the value is sent to search and then the useeffect runs to uodate that value in debounced value after the delay amount of time.
// once it is done If the user types again before 500ms, it clears the previous timer and return the debounced value where it is needed 
//          User types 
//             ↓
//        searchTerm updates
//             ↓
//        useDebounce runs
//             ↓
//     waits 500ms after last keystroke
//             ↓
// debouncedSearch updates (stable input)
//             ↓
//    useEffect triggers API call
//             ↓
//    fetch → JSON → setResults → render

