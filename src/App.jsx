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
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  * {
    padding: 0;
    margin: 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  body {
    background-color: #cae9ff;
  }
`;
