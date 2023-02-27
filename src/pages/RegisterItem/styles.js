import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 1120px;

  h1 {
    margin-top: 24px;
  }

  .buttonPosition {
    display: flex;
    justify-content: flex-end;
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
  margin-top: 32px;

  img {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`

export const LineOne = styled.div`
  display: flex;
  gap: 2rem;

  .input {
    display: none;
    width: 100%;
    height: 100%;
  }

  .div1 {
    min-width: 229px;
    max-width: 229px;
  }
  .div2 {
    min-width: 859px;
  }
`

export const ImgBox = styled.div`
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

export const IngredientsBox = styled.div`
  display: flex;
  align-items: center;
  min-width: 837px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding-left: 0.8rem;
  padding-top: 1px;
  gap: 1rem;
`

export const LineTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;

  .div3 {
    min-width: 837px;
  }

  .div4 {
    min-width: 251px;
  }
`

export const LineTree = styled.div`
  width: 100%;
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-top: 2rem;
  }
  textarea {
    width: 100%;
    height: 172px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    resize: none;

    &::placeholder {
      position: absolute;
    }
  }
`
export const AddButton = styled.button`
  width: 357px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-top: 24px;
`
