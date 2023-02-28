import {
  Container,
  Content,
  OrderItens,
  Payment,
  ButtonsBox,
  PixButton,
  CardButton,
  CounterPayment,
  PaymentPixBox,
  PaymentCreditBox,
  Order,
  PaymentChecked,
  OrderFinished,
} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItem } from '../../components/OrderItem'
import pix from '../../assets/pix.png'
import card from '../../assets/creditCard.png'
import qrcode from '../../assets/qrcode.png'
import clock from '../../assets/Clock.png'
import receipt from '../../assets/receipt.svg'
import forkKnife from '../../assets/forkKnife.png'
import { Input } from '../../components/Input'

export function MyOrder() {
  function handleChangeToPix() {
    const payPix = document.getElementById('Pix')
    const payCredit = document.getElementById('credit')
    const payCounter = document.getElementById('counter')
    const payChecked = document.getElementById('checked')
    payPix.style.display = 'flex'
    payCredit.style.display = 'none'
    payCounter.style.display = 'none'
    payChecked.style.display = 'none'
  }
  function handleChangeToCredit() {
    const payPix = document.getElementById('Pix')
    const payCredit = document.getElementById('credit')
    const payCounter = document.getElementById('counter')
    const payChecked = document.getElementById('checked')
    payCredit.style.display = 'flex'
    payPix.style.display = 'none'
    payCounter.style.display = 'none'
    payChecked.style.display = 'none'
  }

  function handleChangeToChecked() {
    const payPix = document.getElementById('Pix')
    const payCredit = document.getElementById('credit')
    const payCounter = document.getElementById('counter')
    const payChecked = document.getElementById('checked')
    payCredit.style.display = 'none'
    payPix.style.display = 'none'
    payCounter.style.display = 'none'
    payChecked.style.display = 'flex'
  }

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
            <PixButton onClick={handleChangeToPix}>
              <img src={pix} alt="#" />
              PIX
            </PixButton>
            <CardButton onClick={handleChangeToCredit}>
              <img src={card} alt="" /> Crédito
            </CardButton>
          </ButtonsBox>
          <CounterPayment id="counter">
            <img src={clock} alt="relógio" />
            <p>Aguardando pagamento no caixa</p>
          </CounterPayment>
          <PaymentPixBox id="Pix">
            <img className="qrcode" src={qrcode} alt="" />
          </PaymentPixBox>
          <PaymentCreditBox id="credit">
            <form>
              <span className="lineOne">
                <Input
                  title={'Número do Cartão'}
                  type="text"
                  required
                  className="cardNumber"
                  placeholder="0000 0000 0000 0000"
                />
              </span>
              <span className="lineTwo">
                <Input
                  title={'Validade'}
                  type="text"
                  required
                  className="expirationDate"
                  placeholder="04/25"
                />

                <Input
                  title={'CVC'}
                  type="text"
                  name="cvv"
                  required
                  className="CVC"
                  placeholder="04/25"
                />
              </span>
              <Order type="button" onClick={handleChangeToChecked}>
                <img src={receipt} alt="receipt" /> Finalizar pagamento
              </Order>
            </form>
          </PaymentCreditBox>
          <PaymentChecked id="checked">
            <img src={clock} alt="relógio" />
            <p>Pagamento aprovado!</p>
          </PaymentChecked>
          <OrderFinished>
            <img src={forkKnife} alt="relógio" />
            <p>Pedido Entregue!</p>
          </OrderFinished>
        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}
