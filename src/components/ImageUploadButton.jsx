import React, { useRef } from 'react';

const ImageUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle the file upload or preview logic here
    }
  };

  return (
    <div className="">
      <button onClick={handleButtonClick} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-black border-white dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Upload an Image
      </button>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploadButton;
