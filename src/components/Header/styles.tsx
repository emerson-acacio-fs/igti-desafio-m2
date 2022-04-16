import styled, { css } from "styled-components"

export const WrapperHeader = styled.div`
  margin-bottom: 1.5rem;
`

export const TopContent = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.softBlue};
    line-height: 1;
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
  `}
`

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectLabel = styled.label`
  margin-bottom: 1.5rem;
`
