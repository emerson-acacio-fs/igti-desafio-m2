import styled, { css } from "styled-components"

export const MainContent = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 74rem;
  max-width: 118rem;
`

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.gray}50`};
  z-index: 1000;
`

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  flex-direction: column;
  ${({ theme }) => css`
    color: ${theme.colors.red};
  `}
`
