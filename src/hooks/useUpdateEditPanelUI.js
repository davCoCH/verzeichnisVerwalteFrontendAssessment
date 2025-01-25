import { useEffect, useState } from "react";

import {
  handleBtnState,
  updateEditPanelUI,
  updateAddPanelUI,
} from "@helpers/funcs.js";

export default function useUpdateEditPanelUI({ operationType }) {

  const [titlePanel, setTitlePanel] = useState("Neue User erstellen");
  const [buttonPanelLabel, setButtonPanelLabel] = useState("Erstellen");

  useEffect(() => {
    if (operationType === "create") {
      updateAddPanelUI({
        titlePanel,
        setTitlePanel,
        buttonPanelLabel,
        setButtonPanelLabel,
        handleBtnState,
      });
    } else if (operationType === "edit") {
      updateEditPanelUI({
        setTitlePanel,
        setButtonPanelLabel,
        handleBtnState,
        buttonPanelLabel,
        titlePanel,
      });
    }
  }, [operationType]);
  return { titlePanel, buttonPanelLabel }
}