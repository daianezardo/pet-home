import { Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/logo-pet-home.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { selectIsUserLoggedIn } from "../../store/slices/userSlice";

type Props = {
    withoutMargin?: boolean
  }

export function Footer ({ withoutMargin = false }: Props) {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
      <FooterStyled className={`text-center ${withoutMargin ? '' : 'mt-5'}`}>
        <Container className="d-lg-flex align-items-center">
          <Link to='/' className="me-lg-auto">
            <ImageStyled src={Logo} alt='Logo Pet Home' width={255} height={67} />
          </Link>
          <Nav className="flex-column flex-lg-row my-4 my-lg-0">
            <Nav.Link as={Link} to='/' className="text-white">Início</Nav.Link>
              {isUserLoggedIn ? (
                <Nav.Link as={Link} to='/novo-pedido' className="text-white">Novo pedido</Nav.Link>
              ) : (
                <>
                <Nav.Link as={Link} to='/cadastro' className="text-white">Cadastro</Nav.Link>
                <Nav.Link as={Link} to='/login' className="text-white">Login</Nav.Link>
              </>
              )}
              <Nav.Link as={Link} to='/novo-pedido' className="text-white">Novo Pedido</Nav.Link>
      
            <Nav.Link href="/termos-de-uso.pdf" target="_blank" className="text-white">Termos de Uso</Nav.Link>
          </Nav>
          <Nav className="justify-content-center">
            <Nav.Link href="https://facebook.com" target="_blank" className="text-white">
              <IconStyled icon={faFacebookSquare} />
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" className="text-white">
              <IconStyled icon={faInstagram} />

            </Nav.Link>
          </Nav>
        </Container>
      </FooterStyled>
    )
  }
  
  const FooterStyled = styled.footer`
    background: #6283ee;
    padding: 30px 0 40px;
    @media (min-width: 992px) {
      padding: 15px 0;
    }
  `
  const ImageStyled = styled.img`
  @media (min-width: 992px) {
    width: 190px;
    height: auto;
  }
`

const IconStyled = styled(FontAwesomeIcon)`
  font-size: 40px;
`