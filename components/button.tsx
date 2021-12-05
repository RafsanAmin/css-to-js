import React, { FC, MouseEventHandler } from 'react';

const Button: FC<{ handler: MouseEventHandler; children: any }> = ({ handler, children }) => {
  return (
    <div>
      <button type="button" onClick={handler}>
        {children}
      </button>
    </div>
  );
};

export default Button;
