"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success(`Copy promo ( ${text} )`);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="text-white cursor-pointer font-semibold p-4 rounded-lg  border-2 border-yellow-600 transition-all duration-200 ease-in hover:text-yellow-500 "
      >
        Click to Copy
      </button>
      <Toaster />
    </div>
  );
};

export default CopyToClipboardButton;
