import {
  Container,
  Content,
  FormItem,
  ReturnButton,
  LineOne,
  ImgBox,
  LineTwo,
  IngredientsBox,
  LineTree,
  AddButton,
} from './styles'
import { HeaderAdm } from './HeaderAdm/'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import setaEsq from '../../assets/setaEsq.png'
import { IngredientItem } from '../../components/IngredientItem'
import { HiOutlineArrowUpTray } from 'react-icons/hi2'

export function RegisterItem() {
  return (
    <Container>
      <HeaderAdm />

      <Content>
        <ReturnButton>
          <img src={setaEsq} alt="#" />
          voltar
        </ReturnButton>
        <h1>Editar Prato</h1>
        <FormItem>
          <LineOne>
            <div className="div1">
              <p>Imagem do prato</p>
              <ImgBox>
                <label htmlFor="image">
                  <HiOutlineArrowUpTray size={25} />
                  <p>Selecione imagem</p>
                  <input id="image" className="input" type="file" />
                </label>
              </ImgBox>
            </div>
            <div className="div2">
              <Input
                title={'Nome'}
                placeholder="Ex.: Salada Ceasar"
                type="text"
              />
            </div>
          </LineOne>
          <LineTwo>
            <div className="div3">
              <p>Ingredientes</p>
              <IngredientsBox>
                <IngredientItem value={'Pão Naan'} />
                <IngredientItem isNew placeholder="Adicionar" />
              </IngredientsBox>
            </div>
            <div className="div4">
              <Input title={'Preço'} placeholder="R$ 00,00" type="text" />
            </div>
          </LineTwo>
          <LineTree>
            <p>Descrição</p>
            <textarea
              type="text"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </LineTree>
        </FormItem>
        <div className="buttonPosition">
          <AddButton>Adicionar pedido</AddButton>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
