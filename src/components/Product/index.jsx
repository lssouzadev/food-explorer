import {
  Container,
  ButtonMinus,
  ButtonAdd,
  FoodInclude,
  InputAmount,
} from './styles'
import torradas from '../../assets/torradas.png'
import { FiHeart } from 'react-icons/fi'
import addButton from '../../assets/addButton.png'
import minusButton from '../../assets/minusButton.png'
import { Button } from '../Button'

export function Product({ id, ...rest }) {
  function mais() {
    const atual = document.getElementById(id).value
    const novo = atual - -1 // Evitando Concatenacoes
    document.getElementById(id).value =
      document.getElementById(id).value < 9 ? `0${novo}` : novo
  }

  function menos() {
    const atual = document.getElementById(id).value
    if (atual > 1) {
      // evita números negativos
      const novo = atual - 1
      document.getElementById(id).value =
        document.getElementById(id).value <= 10 ? `0${novo}` : novo
    }
  }
  return (
    <Container {...rest}>
      <FiHeart size={25} />
      <img src={torradas} alt="torradas" />
      <a href="">{'Torradas parma >'}</a>
      <h1>Presunto de parma e rúcula em um pão com fermentação natural.</h1>
      <p>R$ 25,97</p>
      <FoodInclude>
        <span>
          <ButtonMinus onClick={menos}>
            <img src={minusButton} alt="#" />
          </ButtonMinus>
          <InputAmount defaultValue="01" type="number" id={id} min={1} />
          <ButtonAdd onClick={mais}>
            <img src={addButton} alt="#" />
          </ButtonAdd>
        </span>
        <Button title="Incluir" />
      </FoodInclude>
    </Container>
  )
}
