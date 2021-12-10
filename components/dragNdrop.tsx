import Styles from '@style/dragndrop.module.css';
import { Blob } from 'buffer';
import React, { FC, useRef, useState } from 'react';

const DragNdrop: FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [dragging, sd] = useState<boolean>(false);
  const [file, setFile] = useState<string>();
  const [t, st] = useState<string>();
  return (
    <div>
      <input ref={fileRef} type="file" />

      <div
        onClick={() => {
          fileRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          sd(true);
        }}
        onDragExit={(e) => {
          e.preventDefault();
          sd(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          sd(false);
          const files = e.dataTransfer.files[0];

          if (files.type !== 'image/png') {
            alert(files instanceof Blob);
          } else {
            const r = new FileReader();
            r.readAsDataURL(files);
            r.addEventListener('load', (f) => {
              setFile(r.result?.toString());
            });
          }
        }}
        className={Styles.dragndrop + (dragging ? ' ' + Styles.d : '')}
      >
        Drag and Drop Your File
      </div>
      <img src={file} alt="" />
    </div>
  );
};

export default DragNdrop;
