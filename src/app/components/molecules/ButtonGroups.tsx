import React from "react";

import CustomButton from "@components/atoms/CustomButton";

interface Props {
  primaryButtonLabel: string;
  onPrimaryButtonClick: () => void;
}
const ButtonGroups = ({ primaryButtonLabel, onPrimaryButtonClick }: Props) => {
  return (
    <div className="flex items-center justify-center mt-4 px-[16px]">
      <CustomButton
        className="btn-primary w-75 mx-1"
        primaryButtonLabel={primaryButtonLabel}
        onClick={onPrimaryButtonClick}
      />
    </div>
  );
};

export default ButtonGroups;
