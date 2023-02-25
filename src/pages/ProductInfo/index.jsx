import {
  Container,
  Content,
  ProductImage,
  ReturnButton,
  DescriptionProduct,
  Ingredients,
  OrderAmount,
  ButtonDecrement,
  ButtonIncrement,
  InputAmount,
} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import setaEsq from '../../assets/setaEsq.png'
import saladaRavanello from '../../assets/saladaRavanello.png'
import alface from '../../assets/alface.png'
import tomate from '../../assets/tomate.png'
import rabanete from '../../assets/rabanete.png'
import paoNaan from '../../assets/paoNaan.png'
import receipt from '../../assets/receipt.svg'
import minusButton from '../../assets/minusButton.png'
import addButton from '../../assets/addButton.png'

function mais() {
  const atual = document.getElementById('total').value
  const novo = atual - -1 // Evitando Concatenacoes
  document.getElementById('total').value =
    document.getElementById('total').value < 9 ? `0${novo}` : novo
}

function menos() {
  const atual = document.getElementById('total').value
  if (atual > 1) {
    // evita números negativos
    const novo = atual - 1
    document.getElementById('total').value =
      document.getElementById('total').value <= 10 ? `0${novo}` : novo
  }
}

export function ProductInfo() {
  return (
    <Container>
      <Header />
      <Content>
        <ProductImage>
          <ReturnButton>
            <img src={setaEsq} alt="#" />
            voltar
          </ReturnButton>
          <img
            className="product"
            src={saladaRavanello}
            alt="Salada Ravanello"
          />
        </ProductImage>
        <DescriptionProduct>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicadas com gergelim.
          </p>
          <Ingredients>
            <div>
              <img src={alface} alt="alface" />
              <p>alface</p>
            </div>
            <div>
              <img src={tomate} alt="tomate" />
              <p>tomate</p>
            </div>
            <div>
              <img src={rabanete} alt="rabanete" />
              <p>rabanete</p>
            </div>
            <div>
              <img src={paoNaan} alt="pão naan" />
              <p>pão naan</p>
            </div>
          </Ingredients>
          <OrderAmount>
            <p>R$ 25,97</p>

            <div>
              <ButtonDecrement onClick={menos}>
                <img src={minusButton} alt="#" />
              </ButtonDecrement>
              <InputAmount defaultValue="01" type="number" id="total" min={1} />
              <ButtonIncrement onClick={mais}>
                <img src={addButton} alt="#" />
              </ButtonIncrement>
            </div>

            <Button title="Incluir" img={receipt} />
          </OrderAmount>
        </DescriptionProduct>
      </Content>
      <Footer />
    </Container>
  )
}
