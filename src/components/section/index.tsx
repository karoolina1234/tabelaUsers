import React from "react";
//styles
import "./styles.css";

interface TypesProps {
  children: React.ReactNode;    
}

const Section = ({ children }: TypesProps) => {
  return <div className="section-component">{children}</div>;
};

export default Section;
