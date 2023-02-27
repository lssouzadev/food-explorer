import { Container, Content, LogoExplorer, FormSignUp } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import logoExplorerLarge from '../../assets/logoExplorerLarger.png'
export function SignIn() {
  return (
    <Container>
      <Content>
        <LogoExplorer>
          <img src={logoExplorerLarge} alt="logo explorer" />
          <strong>food explorer</strong>
        </LogoExplorer>

        <FormSignUp>
          <h1>Faça login</h1>

          <Input
            title={'Email'}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />

          <Input
            title={'Senha'}
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
          <span>
            <Button title="Entrar" />
          </span>
          <a>Criar uma conta</a>
        </FormSignUp>
      </Content>
    </Container>
  )
}
