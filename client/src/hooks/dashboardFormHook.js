import { useState } from "react";

export default (state, reducerType, edit, history, newOredit, product) => {
  const [formData, setFormData] = useState(!edit ? state : product);

  const onChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  //const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const onSubmit = async (e) => {
    e.preventDefault();

    newOredit(formData, reducerType, edit, history);
    // await sleep(500);
    // alert(JSON.stringify(formData, null, 2));
  };
  return [onChange, onSubmit, formData];
};
