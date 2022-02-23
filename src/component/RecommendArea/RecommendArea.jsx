import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Recommend from './Recommend';

const RecommendArea = ({ show, activeIndex }) => {
  const result = useSelector((state) => state.search.success);
  const isSearching = useSelector((state) => state.search.searching);

  if (isSearching) {
    return (
      <RecommendAreaStyled show={show}>
        <Info>
          {result
            ? result.length > 0
              ? '추천 검색어'
              : '검색어 없음'
            : '검색 중...'}
        </Info>
        <Recommends>
          {result &&
            result.length > 0 &&
            result.map((data, idx) => (
              <Recommend
                key={data.id}
                content={data.name}
                selected={idx === activeIndex}
              />
            ))}
        </Recommends>
      </RecommendAreaStyled>
    );
  }
  return null;
};
RecommendArea.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
  activeIndex: PropTypes.number,
};

const RecommendAreaStyled = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: #fff;
  border-radius: 17px;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
`;

const Info = styled.div`
  color: #777;
  font-size: 0.8rem;
  font-weight: light;
  line-height: 1.2;
  margin-bottom: 2px;
`;

const Recommends = styled.ul`
  list-style: none;
`;

export default RecommendArea;
