import Styles from '@style/textarea.module.css';
import React, { FC } from 'react';
import ReactState from '../interfaces/reactState';

type props = {
  state: ReactState<string>;
  spellCheck?: boolean;
};

const Textarea: FC<props> = ({ state, spellCheck }) => {
  const [text, setText] = state;
  return (
    <div className={Styles.text_cont}>
      <textarea
        spellCheck={spellCheck}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
    </div>
  );
};

export default Textarea;
