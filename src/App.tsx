import { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {
  console.log('--App--');
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountup = () => {
    setNum((prev) => prev + 1);
    // setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you doing?</ColorfulMessage>
      <ColorfulMessage color="green">I'm good!</ColorfulMessage>
      <button onClick={onClickCountup}>Countup</button>
      <p>{num}</p>
      <hr />
      <button onClick={onClickToggle}>ON/OFF</button>
      {isShowFace && <p>(@w@)</p>}
    </>
  );
};
