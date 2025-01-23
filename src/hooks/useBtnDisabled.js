import { useEffect } from "react";

export default function useBtnDisabled(editPanelLabel) {
  useEffect(() => {
    const btn = document.getElementById("addBtn");
    if (editPanelLabel === "Neue User erstellen") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }, [editPanelLabel]);

}