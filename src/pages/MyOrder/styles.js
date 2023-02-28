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

export const CounterPayment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  gap: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  img {
    width: 128px;
    height: 128px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
export const PaymentPixBox = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  > img {
    width: 270px;
    height: 270px;
  }
`

export const PaymentCreditBox = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lineOne {
    display: flex;
    flex-direction: column;
    align-items: initial;
  }

  .lineTwo {
    display: flex;
    gap: 17px;
    margin-top: 61px;
  }

  input {
    background: none;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .cardNumber {
    width: 348px;
    height: 48px;
  }

  .expirationDate {
    width: 166px;
    height: 48px;
  }

  .CVC {
    width: 166px;
    height: 48px;
  }
`
export const Order = styled.button`
  width: 348px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.RED_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-top: 53px;
`

export const PaymentChecked = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  gap: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  img {
    width: 128px;
    height: 128px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
export const OrderFinished = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  gap: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  img {
    width: 128px;
    height: 128px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
