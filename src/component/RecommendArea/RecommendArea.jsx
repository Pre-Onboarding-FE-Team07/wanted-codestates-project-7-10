import React from 'react';
import styled from 'styled-components';
import Recommend from './Recommend';
import PropTypes from 'prop-types';

const RecommendArea = ({ show }) => {
  return (
    <RecommendAreaStyled show={show}>
      {/* 추천 검색어 or 검색어 없음*/}
      <Info>추천 검색어</Info>
      <Recommends>
        {/* key: id, content: name */}
        <Recommend key="125" content="Klatskin's tumor" />
        <Recommend key="133" content="간세포암" />
        <Recommend key="187" content="갑상선암종" />
      </Recommends>
    </RecommendAreaStyled>
  );
};

RecommendArea.propTypes = {
  show: PropTypes.bool,
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
