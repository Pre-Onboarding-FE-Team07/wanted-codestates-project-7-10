import React from 'react';
import SearchAreaStyled, { Title, SearchBar } from './SearchArea.styles.jsx';

const SearchArea = () => {
  return (
    <SearchAreaStyled>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      <SearchBar>
        <SearchBar.Box>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"
              fill="#32383E"
            ></path>
          </svg>
          <input type="text" placeholder="질환명을 입력해 주세요. " />
        </SearchBar.Box>
        <SearchBar.Button type="button">검색</SearchBar.Button>
      </SearchBar>
    </SearchAreaStyled>
  );
};

export default SearchArea;
