import React from 'react';

type heightType = '8px' | '16px' | '32px' | '64px' | '128px';

interface CustomSeparatorProps {
  height: heightType;
}

const CustomSeparator = ({ height }: CustomSeparatorProps) => {
  return <div style={{ paddingTop: height }} />;
};

export default CustomSeparator;
