import { Container, Link, Links, SectionTitle, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sportes">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#em-breve">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
