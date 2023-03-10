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
          <Input
            title={'Seu Nome'}
            placeHolder="Exemplo: Maria da Silva"
            type="text"
          />

          <Input
            title={'Email'}
            placeHolder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />

          <Input
            title={'Senha'}
            placeHolder="No mínimo 6 caracteres"
            type="password"
          />
          <span>
            <Button title="Criar conta" />
          </span>
          <a>Já tenho uma conta</a>
        </FormSignUp>
      </Content>
    </Container>
  )
}
