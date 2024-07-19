import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import hogwarts1 from '../../assets/images/hogwarts1.png'
import hogwarts2 from '../../assets/images/image 10.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/close.png'

type GalleryItem = {
  type: 'imagem' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: hogwarts1
  },
  {
    type: 'imagem',
    url: hogwarts1
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/HukrLKMCz1I?si=IrtKNhMqdDT6zgqz'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const GetMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const GetMediaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={GetMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={GetMediaIcon(media)}
                  alt="Clique para maximizar a imagem"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="icone de fechar" />
          </header>
          <img src={hogwarts2} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
