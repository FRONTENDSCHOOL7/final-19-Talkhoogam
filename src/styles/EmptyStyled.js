import styled from "styled-components";
import Button from "../components/common/button/Button";

export const EmptyLayout = styled.div`
  height: calc(100vh - 160px); // header + footer + margin
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const LogoImg = styled.img`
  width: 110px;
  height: 110px;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  color: var(--color-darkgrey);
`;

export const SearchBtn = styled(Button)`
  padding: 10px 15px;
  font-size: 15px;
`;
