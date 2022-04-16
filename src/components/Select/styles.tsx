import styled, { css } from "styled-components"

export const WrapperSelect = styled.span`
  ${({ theme }) => css`
    position: relative;
    border-radius: 0.7rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem ${`${theme.colors.black}25`};
    width: 20rem;
    height: 2.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;

    & > svg {
      position: absolute;
      right: 0.5rem;
      color: ${theme.colors.gray};
      width: 2rem;
      pointer-events: none;
    }
    &:focus-within {
      border-radius: 0.7rem;
      border: 0.1rem solid ${theme.colors.blue};
      box-shadow: 0rem 0rem 0.5rem 0.1rem ${`${theme.colors.blue}5C`};
      & > svg {
        transform: rotate(180deg);
      }
    }
    &::-ms-expand {
      display: none;
    }
  `}
`
export const MainSelect = styled.select`
  ${({ theme }) => css`
    background: transparent;
    width: 20rem;
    color: ${theme.colors.gray};
    padding: 0.5rem 0.5rem;
    font-size: 1.2rem;
    line-height: 1;
    border: 0;
    border-radius: 0;
    height: 3.4rem;
    appearance: none;
    cursor: pointer;

    &&& {
      &:focus {
        outline: none;
      }
    }
    option {
      height: 5rm;
      padding-left: 1.7rem;
      padding-top: 1.2rem;
    }
  `}
`
