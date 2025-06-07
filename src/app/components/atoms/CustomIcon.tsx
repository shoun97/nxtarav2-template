import { JSX, PropsWithChildren } from 'react';

import Link from 'next/link';
import IconsLibrary from '@utils/IconsLibrary';

interface PropsIcon {
  name: string;
  onClick?: () => void;
  classMain?: string;
}

const CustomIcon = ({ name = '', onClick, classMain = '' }: PropsWithChildren<PropsIcon>): JSX.Element => {
  const findIcon = (id: string): JSX.Element | undefined => {
    const foundIcon = IconsLibrary.find((icon) => icon.id === id);
    if (!foundIcon) {
      return IconsLibrary[0].svg;
    } else {
      return foundIcon.svg;
    }
  };

  return (
    <>
      {onClick ? (
        <Link
          href='#'
          onClick={onClick}
          className={`${classMain}`}>
          {findIcon(name)}
        </Link>
      ) : (
        <span className={`${classMain}`}>{findIcon(name)}</span>
      )}
    </>
  );
};

export default CustomIcon;
