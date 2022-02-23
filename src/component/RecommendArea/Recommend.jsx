import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const RecommendStyled = styled.li`
  svg {
    margin-right: 12px;
  }
  display: flex;
  align-items: center;
  line-height: 2.6;
  cursor: pointer;
`;

export default Recommend;
