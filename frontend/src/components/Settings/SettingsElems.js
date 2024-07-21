import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 60px;
  padding: 0px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
`;


