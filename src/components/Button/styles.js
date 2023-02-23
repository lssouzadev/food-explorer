import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;

  &:disabled {
    opacity: 0.5;
  }
`
