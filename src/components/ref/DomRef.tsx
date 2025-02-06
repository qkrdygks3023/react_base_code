import { useEffect, useRef } from "react";
//useRef를 사용하여 input 요소에 대한 참조를 저장
//useRef를 사용하여 DOM 요소에 직접 접근
export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
