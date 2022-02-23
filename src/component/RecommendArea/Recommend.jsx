import React from 'react';
import PropTypes from 'prop-types';
import { RecommendStyled } from './RecommendArea.styles';
import SearchIcon from '../../assets/icon_search.svg';

const Recommend = ({ content }) => {
  return (
    <RecommendStyled>
      <SearchIcon />
      {content}
    </RecommendStyled>
  );
};

Recommend.propTypes = {
  content: PropTypes.string,
};

export default Recommend;
