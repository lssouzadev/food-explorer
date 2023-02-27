import { Container, Content, ButtonStatus, Status } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { RiArrowDownSLine } from 'react-icons/ri'

export function StatusOrderAdm() {
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
              <ButtonStatus>
                <Status color="red">Pendente</Status>
                <RiArrowDownSLine size={22} />
              </ButtonStatus>
              <td>00000004</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <ButtonStatus type="button">
                <Status color="orange">Preparando</Status>
                <RiArrowDownSLine size={22} />
              </ButtonStatus>
              <td>00000003</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <ButtonStatus>
                <Status color="green">Entregue</Status>
                <RiArrowDownSLine size={22} />
              </ButtonStatus>
              <td>00000002</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <ButtonStatus>
                <Status color="green">Entregue</Status>
                <RiArrowDownSLine size={22} />
              </ButtonStatus>
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
