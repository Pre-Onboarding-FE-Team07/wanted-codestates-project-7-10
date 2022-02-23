import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/icon_search.svg';

const Recommend = ({ content, selected }) => {
  return (
    <RecommendStyled selected={selected}>
      <SearchIcon />
      {content}
    </RecommendStyled>
  );
};

Recommend.propTypes = {
  content: PropTypes.string,
  selected: PropTypes.bool,
};

const RecommendStyled = styled.li`
  display: flex;
  align-items: center;
  padding-left: 8px;
  line-height: 2.6;
  background-color: ${({ selected }) => (selected ? `#efefef` : 'inherit')};
  cursor: pointer;
  svg {
    margin-right: 12px;
  }
`;

export default Recommend;
