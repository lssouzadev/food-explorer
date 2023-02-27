import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 105px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  padding-left: 20px;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2rem;
`
export const BoxSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  gap: 2rem;
`

export const LogoExplorer = styled.div`
  width: 190px;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 0.7rem;

  > strong {
    font-size: 1.57rem;
  }
`
export const Favorites = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 18px;
  display: block;
`

export const Order = styled.button`
  width: 216px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.RED_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
