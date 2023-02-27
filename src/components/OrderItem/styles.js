import styled from 'styled-components'

export const Container = styled.div``

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 48px;

  img {
    width: 72px;
    height: 72px;
  }

  div > span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div > button {
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.RED_100};
  }
`
