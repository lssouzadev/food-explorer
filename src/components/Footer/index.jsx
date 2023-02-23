import { Container, LogoFooter, Copy, Box } from './styles'
import logoFooter from '../../assets/logoFooter.svg'
import { FaRegCopyright } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Box>
        <LogoFooter>
          <img src={logoFooter} alt="Logo Explorer" />
          <strong>food explorer</strong>
        </LogoFooter>
        <Copy>
          <FaRegCopyright size={10} />
          <p>2023 - Todos os direitos reservados</p>
        </Copy>
      </Box>
    </Container>
  )
}
