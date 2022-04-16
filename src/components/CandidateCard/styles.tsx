import styled, { css } from "styled-components"

const wrapperModifiers = { a: 1 }

export const WrapperCandidateCard = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 30rem;
    box-shadow: 0.5rem 1rem 1.8rem rgba(0, 0, 0, 0.2);
    border-radius: ${theme.border.radius};
  `}
`

export const MainContent = styled.div``
export const Imag = styled.img``
export const Percentage = styled.div``
export const Votes = styled.div``
export const CandidateName = styled.div``
export const CandidateStatus = styled.div``
export const CandidateData = styled.div``
