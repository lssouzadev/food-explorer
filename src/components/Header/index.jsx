import {
  Container,
  BoxSize,
  LogoExplorer,
  Favorites,
  Order,
  Logout,
} from './styles'
import { InputHeader } from './InputHeader'
import logoExplorer from '../../assets/logo.svg'
import receipt from '../../assets/receipt.svg'
import { FiSearch } from 'react-icons/fi'

import SigOut from '../../assets/signout.svg'
export function Header() {
  return (
    <Container>
      <BoxSize>
        <LogoExplorer>
          <img src={logoExplorer} alt="" />
          <strong>food explorer</strong>
        </LogoExplorer>

        <Favorites type="button">Meus Favoritos</Favorites>
        <InputHeader
          placeholder="Busque pelas opções de pratos"
          icon={FiSearch}
        />
        <Order type="button">
          <img src={receipt} alt="receipt" /> Meu Pedido (0)
        </Order>
        <Logout>
          <img src={SigOut} alt="#" />
        </Logout>
      </BoxSize>
    </Container>
  )
}
