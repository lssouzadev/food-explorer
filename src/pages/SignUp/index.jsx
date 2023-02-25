import { Container, Content, LogoExplorer, FormSignUp } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import logoExplorerLarge from '../../assets/logoExplorerLarger.png'
export function SignUp() {
  return (
    <Container>
      <Content>
        <LogoExplorer>
          <img src={logoExplorerLarge} alt="logo explorer" />
          <strong>food explorer</strong>
        </LogoExplorer>

        <FormSignUp>
          <h1>Crie Sua Conta</h1>
          <p>Seu Nome</p>
          <Input placeHolder="Exemplo: Maria da Silva" />
          <p>Email</p>
          <Input placeHolder="Exemplo: exemplo@exemplo.com.br" />
          <p>Senha</p>
          <Input placeHolder="No mínimo 6 caracteres" />
          <span>
            <Button title="Criar conta" />
          </span>
        </FormSignUp>
      </Content>
    </Container>
  )
}
