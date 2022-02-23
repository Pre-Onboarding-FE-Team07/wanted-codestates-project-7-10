import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchResult } from '../redux/actions/search';

export default function useUserInput(data) {
  const inputRef = useRef();
  const [activeIndex, setActiveIndex] = useState(-1);
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.keyCode === 229) return;
    if (e.key === 'Enter') {
      inputRef.current.value = data[activeIndex].name;
      setActiveIndex(-1);
      dispatch(searchResult(data[activeIndex].name));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeIndex === 0) return;
      setActiveIndex(activeIndex - 1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeIndex >= data.length - 1) return;
      setActiveIndex(activeIndex + 1);
    }
  };

  return { onKeyDown, activeIndex, inputRef };
}
