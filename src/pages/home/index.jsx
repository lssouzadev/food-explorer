import { Container, Advertising, Box } from './styles'
import { Header } from '../../components/Header'
import adsImage from '../../assets/adsImage.svg'
export function Home() {
  return (
    <Container>
      <Header />
      <Advertising>
        <Box>
          <img src={adsImage} alt="#" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Box>
      </Advertising>
    </Container>
  )
}
