import Styles from '@style/textarea.module.css';
import React, { FC } from 'react';
import ReactState from '../interfaces/reactState';
import Header from './header';

type props = {
  state: ReactState<string>;
  spellCheck?: boolean;
  title?: string;
  placeholder?: string;
  fixed?: boolean;
};

const Textarea: FC<props> = ({ state, spellCheck, title, placeholder, fixed }) => {
  const [text, setText] = state;
  return (
    <div className={Styles.text_cont}>
      {title ? <Header size="md">{title}</Header> : null}
      <textarea
        placeholder={placeholder}
        spellCheck={spellCheck}
        onChange={(e) => {
          setText(e.target.value);
        }}
        readOnly={fixed}
        value={text}
      />
    </div>
  );
};

export default Textarea;
