import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  min-width: 1366px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoExplorer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  > strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const FormSignUp = styled.form`
  min-width: 476px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 64px 0 64px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
  border-radius: 16px;
  margin-right: 108px;

  h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  p {
    padding: 32px 0 8px 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > span {
    margin-top: 20px;
  }
`
