import { useState } from "react";
import BaseModal from "../components/Modals/BaseModal";

export default function ModalsDemo() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return <BaseModal isOpen={isOpen} onClose={handleClose} />;
}
