import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 105px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  padding-left: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoExplorer = styled.div`
  width: 500px;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 0.7rem;

  > strong {
    font-size: 1.57rem;
  }
`
export const Favorites = styled.button`
  width: 346px;
  font-weight: 400;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.01rem;
  margin-left: 1rem;
  margin-right: 3rem;
`
export const Search = styled.input`
  max-width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  border-radius: 5px;
  border: solid;

  &::placeholder {
    font-weight: 400;
    font-size: 1rem;
  }
`

export const Order = styled.button`
  width: 481px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.RED_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 5px;
  margin-left: 2.375rem;
  margin-right: 2.125rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 36px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;

  > svg {
    width: 19.6px;
    height: 19.5px;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  margin-right: 128px;
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`
