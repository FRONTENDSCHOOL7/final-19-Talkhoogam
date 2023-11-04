import styled from "styled-components";

export const ChatListWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
  }

  .profile-img {
    width: 42px;
    height: 42px;
    border-radius: 42px;
  }

  .info-wrap {
    width: 100%;
  }

  .profile-id {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .desc-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .desc-text {
    color: var(--color-darkgrey);
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    overflow: hidden; /* 내용이 넘치면 숨기기 */
    text-overflow: ellipsis; /* 초과 텍스트에 '...' 표시 */
    width: 238px; /* 텍스트가 넘어가는 최대 너비 설정 */
  }

  .desc-date {
    color: #adadad;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ChatStyle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;

  .profile-img {
    width: 42px;
    height: 42px;
    border-radius: 42px;
  }

  .text {
    display: inline-block;
    max-width: 220px;
    margin-left: 16px;
    padding: 10px;
    border-radius: 0 10px 10px;
    font-size: 14px;
    line-height: 1.5;
    background-color: var(--color-trans-grey);
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
    font-size: 10px;
    color: #767676;
  }
`;

export const MyChatStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;

  img {
    width: 245px;
    height: 175px;
    object-fit: cover;
    border-radius: 10px;
  }

  .text {
    display: inline-block;
    max-width: 225px;
    padding: 10px;
    border-radius: 10px 0 10px 10px;
    line-height: 1.5;
    font-size: 14px;
    color: white;
    background: var(--color-mainColor);
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
    font-size: 10px;
    color: #767676;
  }
`;
