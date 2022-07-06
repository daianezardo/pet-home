import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from "../../assets/img/logo-pet-home.png"
import LogoWhite from "../../assets/img/logo-pet-home.png"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomButton } from "../CustomButton"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, selectIsUserLoggedIn } from "../../store/slices/userSlice"
import { logoutUser } from "../../services/logoutUser"

type Props = {
    startTransparent?: boolean
  }

export function Header ({ startTransparent = false }: Props) {
    const [isTransparent, setIsTransparent] = useState(startTransparent)
  useEffect(() => {
    const scrollChange = () => {
      const isLowScroll = window.scrollY < 100
      if (startTransparent && isLowScroll !== isTransparent) {
        setIsTransparent(isLowScroll)
      }
    }
    window.addEventListener('scroll', scrollChange)
    return () => {
      window.removeEventListener('scroll', scrollChange)
    }
  }, [isTransparent, startTransparent])
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logoutUser()
    dispatch(deleteUser())
    navigate('/login')
  }
    return (
        <NavbarStyled fixed='top' expand="lg" bg={isTransparent ? undefined : 'white'}>
      <Container>
        <Navbar.Brand to='/' as={Link}>
          <ImageStyled src={isTransparent ? LogoWhite : Logo} alt="Logo Pet Home" width={90} height={50} />
        </Navbar.Brand>
        <NavbarToggleStyled aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} className={isTransparent ? 'text-white' : 'text-dark'} size='lg' />
        </NavbarToggleStyled>
        <NavbarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
          <Nav className="ms-auto">
            <NavLinkStyled forwardedAs={Link} to='/'>Início</NavLinkStyled>
            {isUserLoggedIn ? (
              <>
                <CustomButton className="mt-2 mt-lg-0 ms-lg-4" to='/novo-pedido'>Novo pedido</CustomButton>
                <CustomButton className="mt-2 mt-lg-0 ms-lg-4" onClick={handleLogout}>Sair</CustomButton>
                </>
            ) : (
              <>
                <CustomButton className="mt-2 mt-lg-0 ms-lg-4" to='/cadastro'>Criar conta</CustomButton>
                <CustomButton className="mt-2 mt-lg-0 ms-lg-4" to='/login'>Fazer login</CustomButton>
              </>
            )}
              
          </Nav>
        </NavbarCollapseStyled>
      </Container>
    </NavbarStyled>
    )
}

const NavbarStyled = styled(Navbar)`
  transition: all .3s linear;
  ${props => props.bg === 'white' && `
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `}
`

const ImageStyled = styled.img`
  @media (min-width: 992px) {
    width: 266px;
    height: auto;
  }
`

const NavbarToggleStyled = styled(Navbar.Toggle)`
  border: none;
`

const NavbarCollapseStyled = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    background-color: #FFF;
    margin: 0 -12px;
    padding: 1rem 2rem;
  }
`

const NavLinkStyled = styled(Nav.Link)`
  @media (min-width: 992px) {
    color: #FFF !important;
  }
`