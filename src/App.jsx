import React from 'react';
import SearchArea from './component/SearchArea';
import GlobalStyle from './App.styles';
import { useSelector } from 'react-redux';

export default function App() {
  const result = useSelector((state) => state.search.result);
  console.log(result);

  return (
    <>
      <SearchArea />
      <GlobalStyle />
    </>
  );
}
