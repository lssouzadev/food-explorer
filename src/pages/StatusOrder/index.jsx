import { Container, Content, Status } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
export function StatusOrder() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Pedidos</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Status color="red">Pendente</Status>
              </td>
              <td>00000004</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <Status color="orange">Preparando</Status>
              </td>
              <td>00000003</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <Status color="green">Entregue</Status>
              </td>
              <td>00000002</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <Status color="green">Entregue</Status>
              </td>
              <td>00000001</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <Footer />
    </Container>
  )
}
