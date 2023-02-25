import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 56px;
  border: 0;
  padding: 0;
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;

  &:disabled {
    opacity: 0.5;
  }

  > img {
    width: 26px;
    height: 25px;
  }
`
