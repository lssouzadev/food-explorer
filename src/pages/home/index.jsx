/* eslint-disable no-undef */
import { Container, Advertising, Box, Content } from './styles'
import { Header } from '../../components/Header'
import adsImage from '../../assets/adsImage.svg'
import { ProductMenu } from './components/ProductMenu'
import { Footer } from '../../components/Footer'
import { createContext } from 'react'

export const IdContext = createContext({
  pratos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  sobremesas: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
})
export function Home({ ...rest }) {
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
        <ProductMenu title="Bebidas" />
      </Content>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
