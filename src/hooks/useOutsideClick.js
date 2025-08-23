import { useEffect, useRef } from "react";

export function useOutsideClick(handleClose) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleClose();
        }
      }
      addEventListener("click", handleClick, true);

      return () => removeEventListener("click", handleClick, true);
    },
    [handleClose]
  );
  return ref;
}
