import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Advertising = styled.main`
  width: 100%;
  height: 632px;
`

export const Box = styled.div`
  max-width: 100%;
  height: 260px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-left: 124px;
  margin-right: 124px;
  margin-top: 164px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;

  > div {
    padding-right: 47px;
  }

  > img {
    position: relative;
    bottom: 75px;
    right: 10px;
  }
`
