import { useState } from 'react';

export default function useUserInput() {
  const dummyData = [
    { key: '125', content: "Klatskin's tumor" },
    { key: '133', content: '간세포암' },
    { key: '187', content: '갑상선암종' },
  ];
  const [active, setActive] = useState({
    activeIndex: 0,
    userInput: '',
    filterData: [],
  });

  const onKeyDown = (e) => {
    const { activeIndex, filterData } = active;
    console.log(filterData);
    if (e.keyCode === 13) {
      setActive({
        activeIndex: 0,
        userInput: filterData[activeIndex].content,
        filterData: [],
      });
    } else if (e.keyCode === 38) {
      if (activeIndex === 0) return;
      setActive({ ...active, activeIndex: activeIndex - 1 });
    } else if (e.keyCode === 40) {
      if (activeIndex >= filterData.length - 1) {
        return;
      }
      setActive({ ...active, activeIndex: activeIndex + 1 });
    }
  };
  const onChange = (e) => {
    const userInput = e.target.value;
    let filterData = dummyData.filter((el) =>
      el.content.toLowerCase().includes(userInput)
    );
    setActive({ ...active, userInput: e.target.value, filterData: filterData });
  };
  return { onKeyDown, onChange, active, setActive };
}
