import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 1120px;

  h1 {
    margin-top: 34px;
  }

  table {
    margin-top: 34px;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};

    th {
      border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
      padding-bottom: 1.31rem;
      padding-top: 1.31rem;
      padding-left: 1rem;
      padding-right: 2.5rem;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 15px;
    }

    td {
      border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
      padding-bottom: 1.1rem;
      padding-top: 1.1rem;
      padding-left: 1rem;
      padding-right: 2.5rem;
      text-align: justify;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.color};
  }
`
