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
`

export const Advertising = styled.main`
  width: 100%;
  height: 632px;
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  width: 100%;
  height: 260px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

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
    right: 56px;
  }
`
