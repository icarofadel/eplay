import Button from '../Button'

import star from '../../assets/images/star_wars.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quatity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={star} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span> R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={star} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span> R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quatity>2 Jogos(s) no carrinho</Quatity>
      <Prices>
        Total de R$ 350,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button type={'button'} title={'Clique aqui para continuar com a compra'}>
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
