import styled, { css } from "styled-components"
import { CandidateCardProps } from "./CandidateCard"

export const WrapperCandidateCard = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 25rem;

    box-shadow: 0.5rem 1rem 1.8rem rgba(0, 0, 0, 0.2);
    border-radius: ${theme.border.radius};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
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

export const MainContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`
export const Imag = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`
export const Percentage = styled.div<Pick<CandidateCardProps, "isWinner">>`
  ${({ theme, isWinner }) => css`
    color: ${isWinner ? theme.colors.green : theme.colors.red};
  `}
`
export const Votes = styled.div``
export const CandidateName = styled.div``
export const CandidateStatus = styled.div<Pick<CandidateCardProps, "isWinner">>`
  ${({ theme, isWinner }) => css`
    color: ${isWinner ? theme.colors.green : theme.colors.red};
  `}
`
export const CandidateData = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const InfoWrapper = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
