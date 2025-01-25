import { useEffect, useState } from "react";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*[0-9]{4,}$/;
  return phoneRegex.test(phone);
}

export default function useSubmitDisabled({ formData }) {
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { formValues } = formData;

  const validateInput = ({ name, email, telephon }) => {
    const errors = [];

    if (name.length <= 2 && name !== "") {
      errors.push("Der Name muss mindestens 3 Buchstaben lang sein.");
    }

    if (!isValidEmail(email) && email !== "") {
      errors.push("Die E-Mail-Adresse muss gültig sein, z. B. person@something.com.");
    }

    if (!isValidPhoneNumber(telephon) && telephon !== "") {
      errors.push("Die Telefonnummer muss mindestens 10 Ziffern enthalten.");
    }

    if (errors.length > 0) {
      setErrorMessage(errors[0]);
    } else { setErrorMessage(null) }
  }

  useEffect(() => {
    const { name, email, telephon } = formValues;

    validateInput({ name, email, telephon });

    const isValidForm =
      name.length >= 3 && isValidEmail(email) && isValidPhoneNumber(telephon);
    setBtnIsDisabled(isValidForm);
    if (isValidForm) {
      setErrorMessage(null);
    }
  }, [formValues]);

  return { btnIsDisabled, errorMessage };
}