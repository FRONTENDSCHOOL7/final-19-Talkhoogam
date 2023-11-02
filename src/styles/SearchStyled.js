import styled from "styled-components";

export const SearchList = styled.article`
  margin: 10px;
  display: flex;
  gap: 10px;

  & .search-keyword {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
  }

  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & .user-name {
    font-weight: bold;
  }

  & .user-id {
    font-size: 12px;
    color: var(--color-darkgrey);
  }
`;
