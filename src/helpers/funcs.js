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
  seteditPanelLabel,
  setButtonPanelLabel,
  handleBtnState,
  buttonPanelLabel,
  editPanelLabel
}) => {


  console.log("editing....");
  const titleLabel = "Edit user";
  if (editPanelLabel !== titleLabel) {
    seteditPanelLabel(titleLabel);
  }
  const buttonLabel = "Speicher";
  if (buttonPanelLabel !== buttonLabel) {
    setButtonPanelLabel(buttonLabel);
  }
  handleBtnState(titleLabel);
};

export const updateAddPanelUI = ({ editPanelLabel, seteditPanelLabel, buttonPanelLabel, setButtonPanelLabel, handleBtnState }) => {

  console.log("add user...");

  const titleLabel = "Add new user";
  if (editPanelLabel !== titleLabel) {
    seteditPanelLabel(titleLabel);
  }

  const buttonLabel = "Erstellen";
  if (buttonPanelLabel !== buttonLabel) {
    setButtonPanelLabel(buttonLabel);
  }
  handleBtnState(titleLabel);

}