import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  primaryButtonLabel?: string;
}
const CustomButton = ({ primaryButtonLabel, label, onClick, ...props }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}>
      <small>{primaryButtonLabel || label}</small>
    </button>
  );
};

export default CustomButton;
