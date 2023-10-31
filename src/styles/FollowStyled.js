import styled from 'styled-components';
import Button from '../components/common/button/Button';

export const FollowListStyle = styled.ul`
  width: 100%;

  & .error-list {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const FollowLiStyle = styled.li`
  width: 100%;
  min-height: 50px;
  margin: 12px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .btn-user-link {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 12px;
    }
  }
  & .form-user-info {
    flex-grow: 1;
    text-align: left;

    .user-name {
      font-size: 14px;
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .user-info {
      font-size: 12px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
`;

export const BtnFollow = styled(Button)`
  box-sizing: border;
  width: 76px;
  font-size: 12px;
  font-weight: bold;

  &.btn-cancel {
    color: black;
    background-color: white;
    border: 1px solid #767676;
  }
`;
