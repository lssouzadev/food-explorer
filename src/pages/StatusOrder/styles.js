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
    border-spacing: 0;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    thead th,
    tbody td {
      border: 0.1px solid ${({ theme }) => theme.COLORS.GRAY_800};
    }
    th {
      padding: 1.31rem 2.5rem 1.31rem 1rem;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 15px;
    }

    td {
      padding: 1.1rem 2.5rem 1.1rem 1rem;
      text-align: justify;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    tbody tr:nth-child(even) {
      background-color: #${({ theme }) => theme.COLORS.BLACK};
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
