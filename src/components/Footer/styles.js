import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 124px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  display: flex;
  justify-content: center;
`

export const Box = styled.div`
  display: flex;
  width: 1120px;
  align-items: center;
  justify-content: space-between;
`

export const LogoFooter = styled.div`
  width: 200px;
  height: 32px;
  display: flex;
  align-items: center;
  font-family: 'Roboto', serif;
  font-weight: 700;
  font-size: 26px;
  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Copy = styled.div`
  display: flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  gap: 0.2rem;
`
