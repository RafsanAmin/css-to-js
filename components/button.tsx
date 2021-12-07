import Styles from '@style/button.module.css';
import React, { FC, MouseEventHandler } from 'react';

const Button: FC<{ handler: MouseEventHandler; children: any }> = ({ handler, children }) => {
  return (
    <div className={Styles.button}>
      <button type="button" onClick={handler}>
        {children}
      </button>
    </div>
  );
};

export default Button;
