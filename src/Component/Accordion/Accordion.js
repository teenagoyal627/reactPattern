import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccodionTitle from "./AccodionTitle";
import AccodionContent from "./AccodionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "Accordion-realted components must be wrapped by Accordion"
    );
  }
  return ctx;
}

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();

  const toogleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toogleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;

Accordion.Item = AccordionItem;
Accordion.Title = AccodionTitle;
Accordion.Content = AccodionContent;
