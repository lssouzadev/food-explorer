import {
  Dishes,
  BoxButton,
  ButtonLeft,
  ButtonRight,
  BoxButtonLeft,
  BoxButtonRight,
  Teste,
} from './styles'
import { Product } from '../../../../components/Product'
import setaEsq from '../../../../assets/setaEsq.png'
import setaDir from '../../../../assets/setaDir.png'

export function ProductMenu({ title }) {
  function avancar() {
    document.getElementById(title).scrollLeft += 300
  }

  function voltar() {
    document.getElementById(title).scrollLeft -= 300
  }
  return (
    <Teste>
      <h1>{title}</h1>
      <BoxButton>
        <BoxButtonLeft>
          <ButtonLeft onClick={voltar}>
            <img src={setaEsq} alt="#" />
          </ButtonLeft>
        </BoxButtonLeft>
        <BoxButtonRight>
          <ButtonRight onClick={avancar}>
            <img src={setaDir} alt="#" />
          </ButtonRight>
        </BoxButtonRight>
      </BoxButton>
      <Dishes>
        <div id={title}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </Dishes>
    </Teste>
  )
}
