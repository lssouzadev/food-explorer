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

function mais() {
  const atual = document.getElementById('total').value
  const novo = atual - -1 // Evitando Concatenacoes
  document.getElementById('total').value = novo
}

function menos() {
  const atual = document.getElementById('total').value
  if (atual > 1) {
    // evita números negativos
    const novo = atual - 1
    document.getElementById('total').value = novo
  }
}

export function Product() {
  return (
    <Container>
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
          <InputAmount value={1} type="number" id="total" min={1} />
          <ButtonAdd onClick={mais}>
            <img src={addButton} alt="#" />
          </ButtonAdd>
        </span>
        <Button title="Incluir" />
      </FoodInclude>
    </Container>
  )
}
