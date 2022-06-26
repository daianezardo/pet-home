import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Headex"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
    withoutMargin?: boolean
  }


export const Layout: React.FC<Props> = ({ children, startTransparent, withoutMargin }) => {
    return (
      <>
      <Header startTransparent={startTransparent}/>
      <MainStyled startTransparent={startTransparent}>
        {children}
        </MainStyled>
        <Footer withoutMargin={withoutMargin}/>
      </>
    )
  }

  const MainStyled = styled.main<Props>`
  ${props => !props.startTransparent && `
    padding-top: 77px;
    @media (min-width: 992px) {
      padding-top: 96px;
    }
  `}
`