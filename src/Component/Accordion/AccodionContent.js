import React from "react";
import { useAccordionContext } from "./Accordion";

const AccodionContent = ({ id, className, children }) => {
  const { openItemId } = useAccordionContext();
  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? " "} open` : `${className ?? " "} close`
      }
    >
      {children}
    </div>
  );
};

export default AccodionContent;
