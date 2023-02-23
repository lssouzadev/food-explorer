import { Container, Advertising, Box, Content } from './styles'
import { Header } from '../../components/Header'
import adsImage from '../../assets/adsImage.svg'
import { ProductMenu } from './components/ProductMenu'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Advertising>
          <Box>
            <img src={adsImage} alt="#" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Box>
        </Advertising>
        <ProductMenu title="Pratos Principais" />
        <ProductMenu title="Sobremesas" />
      </Content>
      <Footer />
    </Container>
  )
}
