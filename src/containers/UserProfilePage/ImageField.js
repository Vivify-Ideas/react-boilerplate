import React, { useState } from 'react';

export default function ImageField({ field, setFieldValue }) {
  const { value, name } = field;
  const [key, setKey] = useState(Date.now());

  function handleOnFileUpload(event) {
    setFieldValue(name, event.currentTarget.files[0]);
  }

  function handleRemove() {
    setFieldValue(name, null);
    setKey(Date.now());
  }

  return (
    <>
      <input
        key={key}
        accept="image/*"
        id="image-upload"
        type="file"
        onChange={handleOnFileUpload}
      />
      {value && <button onClick={handleRemove}>Remove</button>}
    </>
  );
}
