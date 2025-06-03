// hooks/useEnquiryForm.js
import { useState } from "react";

export const useEnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return {
    isOpen,
    openForm,
    closeForm,
  };
};
