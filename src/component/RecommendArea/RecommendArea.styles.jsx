import styled from 'styled-components';

const RecommendAreaStyled = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: #fff;
  border-radius: 17px;
  width: 660px;
  margin: 9px auto 0;
  padding: 25px;
  box-sizing: border-box;
`;

export const Info = styled.div`
  color: #777;
  font-size: 0.8rem;
  font-weight: light;
  line-height: 1.2;
  margin-bottom: 2px;
`;

export const Recommends = styled.ul`
  list-style: none;
`;

export const RecommendStyled = styled.li`
  svg {
    margin-right: 12px;
  }
  display: flex;
  align-items: center;
  line-height: 2.6;
  cursor: pointer;
`;

export default RecommendAreaStyled;
