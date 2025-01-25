export const handleBtnState = (label) => {
  const btn = document.getElementById("addBtn");
  if (btn) {
    if (label === "Neue User erstellen") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }
};

export const updateEditPanelUI = ({
  setTitlePanel,
  setButtonPanelLabel,
  handleBtnState,
  buttonPanelLabel,
  editPanelLabel
}) => {


  console.log("editing....");
  const titleLabel = "Edit user";
  if (editPanelLabel !== titleLabel) {
    setTitlePanel(titleLabel);
  }
  const buttonLabel = "Speicher";
  if (buttonPanelLabel !== buttonLabel) {
    setButtonPanelLabel(buttonLabel);
  }
  handleBtnState(titleLabel);
};

export const updateAddPanelUI = ({ titlePanel, setTitlePanel, buttonPanelLabel, setButtonPanelLabel, handleBtnState }) => {

  console.log("add user...");

  const titleLabel = "Neue User erstellen";

  if (titlePanel !== titleLabel) {
    setTitlePanel(titleLabel);
  }

  const buttonLabel = "Erstellen";
  if (buttonPanelLabel !== buttonLabel) {
    setButtonPanelLabel(buttonLabel);
  }
  handleBtnState(titleLabel);

}