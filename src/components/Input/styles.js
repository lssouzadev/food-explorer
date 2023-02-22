import styled from 'styled-components'

export const Container = styled.div`
  width: 60vh;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 5px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
    }
  }

  > svg {
    margin-left: 16px;
  }
`

/* import styled from 'styled-components'

export const Container = styled.input`
  width: 100vh;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  border-radius: 5px;
  border: solid;

 
` */
