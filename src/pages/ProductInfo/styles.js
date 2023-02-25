import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.div`
  margin-top: 50px;
  .product {
    width: 389.5px;
    height: 389.5px;
    margin-top: 41px;
  }
`

export const ReturnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  gap: 1rem;

  img {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const DescriptionProduct = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-left: 41px;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 8px;
    padding-right: 30px;
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin-top: 26.5px;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
export const OrderAmount = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }

  > p {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-weight: 400;
    font-size: 32px;
    margin-top: 10px;
  }
`

export const ButtonDecrement = styled.button`
  background: none;
  border: none;
  position: relative;
  bottom: 3px;
  right: 4px;
`

export const ButtonIncrement = styled.button`
  background: none;
  border: none;
  position: relative;
  top: 2px;
  left: 4px;
`

export const InputAmount = styled.input`
  width: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: 'Roboto Slab', serif;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
