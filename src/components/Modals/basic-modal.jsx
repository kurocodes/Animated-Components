import { useState } from "react";
import BaseModal from "./BaseModal";
import { motion } from "motion/react";
import Button from "../Button/Button";

export default function BasicModalView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleModel}>Basic Model</Button>

      <BaseModal isOpen={isOpen} onClose={toggleModel} />
    </>
  );
}
