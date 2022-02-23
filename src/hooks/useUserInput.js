import { useState } from 'react';

export default function useUserInput(data) {
  const [active, setActive] = useState({
    activeIndex: -1,
    userInput: '',
  });

  const onKeyDown = (e) => {
    const { activeIndex } = active;
    if (e.key === 'Enter') {
      setActive({
        activeIndex: -1,
        userInput: data[activeIndex].content,
      });
    } else if (e.key === 'ArrowUp') {
      if (activeIndex === 0) return;
      setActive({ ...active, activeIndex: activeIndex - 1 });
    } else if (e.key === 'ArrowDown') {
      if (activeIndex >= data.length - 1) {
        return;
      }
      setActive({ ...active, activeIndex: activeIndex + 1 });
    }
  };

  const onChange = (e) => {
    setActive({ ...active, userInput: e.target.value });
  };

  return { onKeyDown, active, setActive, onChange };
}
