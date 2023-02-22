import { Container, LogoExplorer, Favorites, Order, Logout } from './styles'
import { Input } from '../Input'
import logoExplorer from '../../assets/logo.svg'
import receipt from '../../assets/receipt.svg'
import { FiSearch } from 'react-icons/fi'

import SigOut from '../../assets/signout.svg'
export function Header() {
  return (
    <Container>
      <LogoExplorer>
        <img src={logoExplorer} alt="" />
        <strong>food explorer</strong>
      </LogoExplorer>

      <Favorites type="button">Meus Favoritos</Favorites>
      <Input placeholder="Busque pelas opções de pratos" icon={FiSearch} />
      <Order type="button">
        <img src={receipt} alt="receipt" /> Meu Pedido (0)
      </Order>
      <Logout>
        <img src={SigOut} alt="#" />
      </Logout>
    </Container>
  )
}
