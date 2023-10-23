import styled from 'styled-components';

export const GroupSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const GroupArticle = styled.article`
  padding: 20px;
  border-bottom: 1px solid #dbdbdb;
  text-align: center;

  & h3 {
    color: var(--color-mainColor);
    font-size: 17px;
    margin-bottom: 10px;
  }
`;

export const GatheringUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
`;

export const GatheringItemsStyle = styled.li`
  width: 100px;
  padding: 10px;

  & .post-thumbnail {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
  }
  & .post-tit {
    font-weight: bold;
    color: var(--color-mainColor);
  }

  & .post-info {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
