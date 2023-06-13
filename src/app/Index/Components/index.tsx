
import React, { memo, useState } from 'react';
import Dynamic from './Dynamic';
import s from './index.scss';

const list = Array(10).fill(0).map((_, i: number) => {
  return `task-${i}`;
});

const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={s.task} onClick={() => setShow(!show)}>
      {list.map((item: string, i: number) => {
        return (
          <span key={i} className={s['task-item']}>{item}: </span>
        );
      })}
      {show && <Dynamic />}
    </div>
  );
};

export default memo(Main);
