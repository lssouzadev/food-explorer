import styled from 'styled-components'

export const Dishes = styled.div`
  width: 100%;

  > div {
    display: flex;

    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const BoxButton = styled.div`
  width: 1120px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
`

export const BoxButtonLeft = styled.div`
  width: 116px;
  height: 463px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  border: none;
  background: linear-gradient(to right, #121212 30%, transparent);
`

export const ButtonLeft = styled.button`
  background: none;
  border: none;
`

export const BoxButtonRight = styled.div`
  width: 116px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: linear-gradient(to left, #121212 30%, transparent);
`

export const ButtonRight = styled.button`
  background: none;
  border: none;
`

export const Teste = styled.div`
  width: 100%;
  max-height: 500px;
  margin-bottom: 50px;
`
