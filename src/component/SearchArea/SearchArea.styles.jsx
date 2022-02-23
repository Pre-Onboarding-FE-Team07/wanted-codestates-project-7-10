import styled from 'styled-components';

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

export const Title = styled.h1`
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
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

export default SearchAreaStyled;
