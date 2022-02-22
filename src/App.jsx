import React from 'react';
import SearchArea from './component/SearchArea/SearchArea.jsx';
import { createGlobalStyle } from 'styled-components';

export default function App() {
  return (
    <div>
      <SearchArea />
      <GlobalStyle />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #cae9ff;
  }
`;
