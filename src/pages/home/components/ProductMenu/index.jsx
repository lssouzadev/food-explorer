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

export function ProductMenu({ title, ...rest }) {
  function avancar() {
    document.getElementById(title).scrollLeft += 300
  }

  function voltar() {
    document.getElementById(title).scrollLeft -= 300
  }
  return (
    <Teste {...rest}>
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
          <Product id={`${title}1`} />
          <Product id={`${title}2`} />
          <Product id={`${title}3`} />
          <Product id={`${title}4`} />
          <Product id={`${title}5`} />
          <Product id={`${title}6`} />
          <Product id={`${title}7`} />
          <Product id={`${title}8`} />
          <Product id={`${title}9`} />
          <Product id={`${title}10`} />
        </div>
      </Dishes>
    </Teste>
  )
}
