import { useEffect, useState } from "react";

const useDebounced = <T,>(value: T, delay: number) => {
    const [ debounceValue, setDoubounceValue] = useState<T>(value)
      useEffect(()=>{
        let timeout = setTimeout(()=>{
                setDoubounceValue(value)
        }, delay)
        return ()=> clearTimeout(timeout);
      },[value, delay])
      return debounceValue;
}

export default useDebounced;
