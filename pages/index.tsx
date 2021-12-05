import type { NextPage } from 'next';
import { useState } from 'react';
import Button from '../components/button';
import Textarea from '../components/textarea';
import cssToJs from '../lib/csstojs';

const Home: NextPage = () => {
  const css = useState<string>('');
  const [js, setJS] = useState<string>('');
  return (
    <>
      <Textarea state={css} />
      <Button
        handler={() => {
          setJS(cssToJs(css[0]));
        }}
      >
        Convert
      </Button>
      <pre>{js}</pre>
    </>
  );
};

export default Home;
