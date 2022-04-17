import styled, { css } from "styled-components"

export const WrapperInfoArea = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  display: flex;
  flex-direction: column;
  row-gap: 1.45rem;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  padding: 0 1.5rem;
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
    `};
`
export const Totals = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
`
export const Voters = styled.span``
export const Absence = styled.span``
export const Presence = styled.span``
export const CandidateNumber = styled.div``
