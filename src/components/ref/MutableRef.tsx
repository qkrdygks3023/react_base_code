import { useEffect, useRef, useState } from "react";
//useEffect 훅: 컴포넌트가 마운트될 때 한 번만 실행
//useRef를 사용하여 DOM 요소에 직접 접근
export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      {timer}
      <button onClick={() => stopTimer()}>stop</button>
    </div>
  );
};
