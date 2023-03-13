import React from "react";
import { Input } from "../Input/Input";

export const FileUpload = ({ accept = "image/*", label, field, form }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = (readFile) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result) => form.setFieldValue(field.name, result));
  };

  return (
    <>
      <Input
        onChange={handleFileUpload}
        label={label}
        type="file"
        accept={accept}
      />
    </>
  );
};
