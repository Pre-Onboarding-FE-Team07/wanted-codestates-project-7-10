import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchAreaStyled, { Title, SearchBar } from './SearchArea.styles.jsx';
import SearchIcon from '../../assets/icon_search.svg';
import RecommendArea from '../RecommendArea/RecommendArea.jsx';

const SearchArea = () => {
  const isPC = useMediaQuery({ query: '(min-width: 1040px)' });
  return (
    <SearchAreaStyled isPC={isPC}>
      <Title className="title-responsive">
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      <SearchBar className="searchbar-responsive">
        <SearchBar.Box>
          {isPC && <SearchIcon />}
          <input type="text" placeholder="질환명을 입력해 주세요. " />
          {!isPC && <SearchIcon />}
        </SearchBar.Box>
        {isPC && <SearchBar.Button type="button">검색</SearchBar.Button>}
      </SearchBar>
      {/* show true/false에 따라 RecommendArea display 속성 변경 */}
      <RecommendArea show />
    </SearchAreaStyled>
  );
};

export default SearchArea;
