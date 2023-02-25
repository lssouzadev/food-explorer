import { Container } from './styles'

export function Button({ title, loading = false, img, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {img && <img src={img} alt="#" />}
      {loading ? 'Carregando' : title}
    </Container>
  )
}
