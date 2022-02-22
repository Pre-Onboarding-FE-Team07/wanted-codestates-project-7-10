import React from 'react';
import Recommend from './Recommend.jsx';
import RecommendAreaStyled, {
  Info,
  Recommends,
} from './RecommendArea.styles.jsx';
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

export default RecommendArea;
