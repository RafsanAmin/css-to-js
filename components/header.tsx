import Style from '@style/header.module.css';
import React, { CSSProperties, FC } from 'react';

type size = 'lg' | 'sm' | 'md';

type props = {
  children: string;
  size: size;
  style?: CSSProperties;
};

const Header: FC<props> = ({ children, size, style }) => {
  return (
    <div style={style} className={Style.header + ' ' + Style[size]}>
      <p>{children}</p>
    </div>
  );
};

export default Header;
