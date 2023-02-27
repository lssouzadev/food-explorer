import {
  Container,
  BoxSize,
  LogoExplorer,
  Favorites,
  Order,
  Box,
} from './styles'

import logoExplorer from '../../../assets/logo.svg'
import receipt from '../../../assets/receipt.svg'

export function HeaderAdm() {
  return (
    <Container>
      <BoxSize>
        <LogoExplorer>
          <img src={logoExplorer} alt="" />
          <strong>food explorer</strong>
        </LogoExplorer>
        <Box>
          <Favorites type="button">Administrador</Favorites>

          <Order type="button">
            <img src={receipt} alt="receipt" /> Meu Pedido (0)
          </Order>
        </Box>
      </BoxSize>
    </Container>
  )
}
