import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  max-width: 1126px;
  min-width: 1126px;
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
`

export const OrderItens = styled.div`
  width: 50%;
  .total {
    margin-top: 40px;
  }
`

export const Payment = styled.div`
  min-width: 530px;
  min-height: 445px;
  display: flex;
  flex-direction: column;
`
export const ButtonsBox = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const PixButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 81px;
  background-color: blue;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  &:focus {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top-left-radius: 8px;
  }
`
export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 81px;
  background-color: red;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  &:focus {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    border-top-right-radius: 8px;
  }
`
export const PaymentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  > img {
    width: 270px;
    height: 270px;
  }
`
