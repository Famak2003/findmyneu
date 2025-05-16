import { useEffect } from "react";

export const useOutsideClick = (ref, btnRef, callback) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target) || !btnRef?.current || btnRef?.current.contains(event.target) ) {
          return;
        }
        callback(event);
      };
   
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
   
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, btnRef, callback]);
  };
  