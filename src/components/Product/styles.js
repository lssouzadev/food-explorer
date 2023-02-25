import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 512px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: first baseline;
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    position: relative;
    left: 120px;
    margin-top: 21px;
  }

  > img {
    width: 176px;
    height: 176px;
    margin-top: 30px;
  }
  > a {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 18px;
  }
  p {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-weight: 400;
    font-size: 32px;
    margin-top: 10px;
  }
`

export const FoodInclude = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-right: 40px;
  padding-left: 40px;

  > span {
    display: flex;
    margin-top: 15px;
  }
`

export const ButtonMinus = styled.button`
  background: none;
  border: none;
  position: relative;
  bottom: 3px;
  right: 4px;
`

export const ButtonAdd = styled.button`
  background: none;
  border: none;
  position: relative;
  top: 2px;
  left: 4px;
`

export const InputAmount = styled.input`
  width: 50px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
