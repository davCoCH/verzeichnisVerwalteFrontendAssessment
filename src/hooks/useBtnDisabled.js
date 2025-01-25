import { useEffect } from "react";

export default function useBtnDisabled(stateLabel, valueToCheck, elementID) {
  useEffect(() => {
    const btn = document.getElementById(elementID);
    if (stateLabel === valueToCheck) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }, [stateLabel]);

}