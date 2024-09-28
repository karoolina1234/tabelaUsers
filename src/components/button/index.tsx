import React from "react";
//styles
import "./styles.css";

interface TypesProps {
  children: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon,
}: TypesProps) => {
  return (
    <button
      className={`btn btn-delta ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="children">
        {children}
        {icon && <span className="icon">{icon}</span>}
      </p>
    </button>
  );
};

export default Button;
