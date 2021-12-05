import React, { FC } from 'react';
import ReactState from '../interfaces/reactState';

type props = {
  state: ReactState<string>;
};

const Textarea: FC<props> = ({ state }) => {
  const [text, setText] = state;
  return (
    <div>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
    </div>
  );
};

export default Textarea;
