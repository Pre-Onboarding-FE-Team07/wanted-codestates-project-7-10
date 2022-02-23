import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import SearchIcon from '../assets/icon_search.svg';
import useUserInput from '../hooks/useUserInput';
import { isSearching, searchRecommend } from '../redux/actions/search';
import debounce from '../utilities/debounce';
import RecommendArea from './RecommendArea/RecommendArea';

const SearchArea = () => {
  const isPC = useMediaQuery({ query: '(min-width: 1040px)' });
  const result = useSelector((state) => state.search.success);
  const { onKeyDown, activeIndex, inputRef } = useUserInput(result);

  // redux의 action -> state 변경하는 로직
  const dispatch = useDispatch();
  const debounceHandler = useCallback(
    debounce((value) => updateResult(value), 500),
    []
  );

  // input에 있는 값 가져오는 onChange 함수
  const onchangeValue = useCallback(
    (e) => {
      if (e.target.value.replace(/\s/gi, '') === '') {
        debounceHandler(null);
        dispatch(isSearching(false));
      } else {
        dispatch(isSearching(true));
        debounceHandler(e.target.value);
      }
    },
    [debounceHandler]
  );
  const updateResult = useCallback((value) => {
    dispatch(searchRecommend(value));
  });

  // 검색 버튼 누르면 동작하는 event함수
  const onSearch = () => { };

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
          <input
            type="text"
            ref={inputRef}
            placeholder="질환명을 입력해 주세요. "
            onChange={onchangeValue}
            onKeyDown={onKeyDown}
          />
          {!isPC && <SearchIcon onClick={onSearch} />}
        </SearchBar.Box>
        {isPC && (
          <SearchBar.Button type="button" onClick={onSearch}>
            검색
          </SearchBar.Button>
        )}
      </SearchBar>
      {/* show true/false에 따라 RecommendArea display 속성 변경 */}
      <RecommendArea show activeIndex={activeIndex} />
    </SearchAreaStyled>
  );
};

const SearchAreaStyled = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  width: ${({ isPC }) => (isPC ? '660px' : 'calc(100vw - 40px)')};

  ${({ isPC }) =>
    !isPC &&
    `
  .title-responsive {
    font-size: 1.25rem;
  }
  .searchbar-responsive > div {
    padding: 12px 20px;
    justify-content: space-between;
    svg {
      margin: 0;
      cursor: pointer;
    }
  }`}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 42px;
  margin: 0 auto 12px;
`;

SearchBar.Box = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  position: relative;
  svg {
    margin-right: 12px;
  }
  input {
    border: 0;
    background-color: transparent;
    font-size: 100%;
    line-height: 1.15;
    color: #111;
    width: 100%;
  }
  input::placeholder {
    color: #aaa;
  }
  input:focus {
    outline: 0;
  }
`;

SearchBar.Button = styled.button`
  background-color: #007be9;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding: 18px 32px;
  cursor: pointer;
  border: 0;
  border-radius: 0 42px 42px 0;
`;

export default SearchArea;
