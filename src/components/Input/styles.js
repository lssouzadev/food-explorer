import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};

  > input {
    height: 20px;
    width: 100%;
    font-size: 16px;
    padding: 1.5rem 0 1.5rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`
