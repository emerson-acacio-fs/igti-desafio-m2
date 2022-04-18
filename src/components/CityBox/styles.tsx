import styled, { css } from "styled-components"

export const WrapperCityBox = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 1.5rem;
    display: flex;
    row-gap: 1.5rem;
    flex-direction: column;
  `}
`

type Animation = { startAnimation: boolean }

export const WrapperCandidates = styled.div<Animation>`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  ${({ startAnimation }) =>
    startAnimation &&
    css`
      animation: openEditCurrent 0.7s linear;
      transform-origin: top;
      @keyframes openEditCurrent {
        0% {
          opacity: 0;
          transform: scaleY(0);
        }
        25% {
          opacity: 0;
          transform: scaleY(0.3);
        }
        100% {
          opacity: 1;
          transform: scaleY(1);
        }
      }
    `}
`
