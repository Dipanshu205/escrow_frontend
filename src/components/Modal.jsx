import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-xl shadow-xl w-full max-w-lg relative">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">{title}</h2>
        <div className="text-slate-300">{children}</div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
