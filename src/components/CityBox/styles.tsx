import styled, { css } from "styled-components"

export const WrapperCityBox = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 1.5rem;
  `}
`

export const WrapperCandidates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`
