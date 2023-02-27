import { Container, Item } from './styles'
import saladaRavanello from '../../assets/saladaRavanello.png'
export function OrderItem() {
  return (
    <Container>
      <Item>
        <div>
          <img src={saladaRavanello} alt="Salada Ravanello" />
        </div>
        <div>
          <span>
            <h1>1x Salada Radish</h1>
            <p>R$ 25,97</p>
          </span>
          <button>Excluir</button>
        </div>
      </Item>
    </Container>
  )
}
