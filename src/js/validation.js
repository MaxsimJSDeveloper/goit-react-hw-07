import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Required"),
});

export const handleKeyPress = (event) => {
  const charCode = event.charCode;
  if ((charCode < 48 || charCode > 57) && charCode !== 45) {
    event.preventDefault();
  }
};
