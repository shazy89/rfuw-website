import * as Yup from "yup";

export const normalizeText = (text) => {
  return text.toLowerCase().replace(/\W/g, "");
};
export const formInitialValues = {
  name: "",
  company: "",
  physicalAddress: "",
  emailAddress: "",
  reasons: "",
  frequencyRange: "",
  peakPower: "",
  pulseWidth: "",
  dutyCycle: "",
  cwPower: "",
  insertionLoss: "",
  returnLoss: "",
  isolation: "",
  switchingTime: "",
  flatLeakage: "",
  recoveryTime: "",
  message: ""
};
export const formInitialValuesOther = {
  name: "",
  company: "",
  physicalAddress: "",
  emailAddress: "",
  reasons: "",
  message: ""
};

export const rfSwitches = Yup.object().shape({
  name: Yup.string().required("Required"),
  physicalAddress: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  reasons: Yup.string().required("Required"),
  frequencyRange: Yup.string().required("Required"),
  peakPower: Yup.string().required("Required"),
  pulseWidth: Yup.string().required("Required"),
  dutyCycle: Yup.string().required("Required"),
  insertionLoss: Yup.string().required("Required"),
  returnLoss: Yup.string().required("Required"),
  isolation: Yup.string().required("Required"),
  switchingTime: Yup.string().required("Required"),
  message: Yup.string().required("Required")
});
export const rfLimiter = Yup.object().shape({
  name: Yup.string().required("Required"),
  physicalAddress: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  reasons: Yup.string().required("Required"),
  frequencyRange: Yup.string().required("Required"),
  peakPower: Yup.string().required("Required"),
  pulseWidth: Yup.string().required("Required"),
  dutyCycle: Yup.string().required("Required"),
  insertionLoss: Yup.string().required("Required"),
  flatLeakage: Yup.string().required("Required"),
  recoveryTime: Yup.string().required("Required"),
  message: Yup.string().required("Required")
});

export const otherval = Yup.object().shape({
  name: Yup.string().required("Required"),
  physicalAddress: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  reasons: Yup.string().required("Required"),
  message: Yup.string().required("Required")
});
