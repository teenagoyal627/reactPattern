import React from "react";
import { useAccordionContext } from "./Accordion";

const AccodionTitle = ({ id, className, children }) => {
  const { toogleItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toogleItem(id)}>
      {children}
    </h3>
  );
};

export default AccodionTitle;
