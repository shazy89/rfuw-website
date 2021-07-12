import { useRef, useState } from "react";
import { handleReducer } from "./constants";

export default (_id, type, newImage) => {
  const [image, setImage] = useState("");
  const [reducerType, setReducerType] = useState(handleReducer(type));

  const fileSelect = useRef(null);

  const handleImageUpload = () => {
    if (fileSelect) {
      fileSelect.current.click();
    }
  };
  const handleCancel = () => {
    setImage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    newImage(_id, reducerType, type, image);
    handleCancel();
    //newOredit(image);
    // await sleep(500);
    // alert(JSON.stringify(formData, null, 2));
  };

  return [
    handleImageUpload,
    handleImageChange,
    fileSelect,
    image,
    handleCancel,
    onSubmit
  ];
};
