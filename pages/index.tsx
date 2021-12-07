import Header from '@components/header';
import type { NextPage } from 'next';
import { useState } from 'react';
import Button from '../components/button';
import Textarea from '../components/textarea';
import cssToJs from '../lib/csstojs';

const Home: NextPage = () => {
  const css = useState<string>('');
  const js = useState<string>('');
  return (
    <div className="cont">
      <div className="cont_inner">
        <Header size={'lg'}>CSS to JS Converter</Header>
        <div className="convert">
          <Textarea spellCheck={false} state={css} />
          <div>
            <Button
              handler={() => {
                js[1](cssToJs(css[0]));
              }}
            >
              Convert
            </Button>
            <Button
              handler={() => {
                navigator.clipboard.writeText(js[0]);
              }}
            >
              Copy
            </Button>
          </div>
          <Textarea state={js} spellCheck={false} />
        </div>
      </div>
    </div>
  );
};
const x = {
  margin: 'auto',
  fontFamily: 'Ubuntu',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1rem',
  backgroundImage: 'linear-gradient(70deg, rgb(2, 51, 107), rgb(224, 0, 123))',
  backgroundClip: 'text',
  color: 'transparent',
};
export default Home;
