import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-white rounded-xl text-white w-40 h-14 bg-red-600 text-center"
    >
      {label}
    </button>
  );
};

export default Button;
