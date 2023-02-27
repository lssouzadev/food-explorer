import { Container } from './styles'

export function Input({ title, children, ...rest }) {
  return (
    <Container>
      <p>{title}</p>
      <input {...rest}></input>
      {children}
    </Container>
  )
}
