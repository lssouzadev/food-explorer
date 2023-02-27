import {
  Container,
  Content,
  OrderItens,
  Payment,
  ButtonsBox,
  PixButton,
  CardButton,
  PaymentBox,
} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItem } from '../../components/OrderItem'
import pix from '../../assets/pix.png'
import card from '../../assets/creditCard.png'
import qrcode from '../../assets/qrcode.png'
export function MyOrder() {
  return (
    <Container>
      <Header />
      <Content>
        <OrderItens>
          <h1>Meu Pedido</h1>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <p className="total">Total: R$ 103,88</p>
        </OrderItens>
        <Payment>
          <h1>Pagamento</h1>
          <ButtonsBox>
            <PixButton>
              <img src={pix} alt="#" />
              PIX
            </PixButton>
            <CardButton>
              {' '}
              <img src={card} alt="" /> Crédito
            </CardButton>
          </ButtonsBox>
          <PaymentBox>
            <img className="qrcode" src={qrcode} alt="" />
          </PaymentBox>
        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}
