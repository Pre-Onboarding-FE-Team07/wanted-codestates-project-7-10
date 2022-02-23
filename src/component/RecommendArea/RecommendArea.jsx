import React from 'react';
import styled from 'styled-components';
import Recommend from './Recommend';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const RecommendArea = ({ show }) => {
  const result = useSelector((state) => state.search.success);

  if (result && result.length === 0) {
    return (
      <RecommendAreaStyled show={show}>
        <Info>검색어 없음</Info>
      </RecommendAreaStyled>
    );
  }
  if (result && result.length > 0) {
    return (
      <RecommendAreaStyled show={show}>
        <Info>추천 검색어</Info>
        {result &&
          result.map((data, idx) => (
            <Recommends key={idx}>
              <Recommend id={data.id} content={data.name} />
            </Recommends>
          ))}
      </RecommendAreaStyled>
    );
  }
  return null;
};

RecommendArea.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
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
