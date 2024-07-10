import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero velit id
      temporibus animi reprehenderit ea dolorem consectetur quos quibusdam
      accusamus enim optio quaerat minima necessitatibus minus, blanditiis qui!
      Hic, in.
    </Descricao>
  </Card>
)

export default Product
