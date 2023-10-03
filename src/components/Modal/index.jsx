import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div
        className="
        flex
        items-center
        justify-center
        min-h-screen
        pt-4
      "
      >
        <div
          className="
          fixed
          inset-0
          bg-gray-500
          bg-opacity-75
          transition-opacity
        "
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <div
          className="
             rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
