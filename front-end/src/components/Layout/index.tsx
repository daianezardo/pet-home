import { Header } from "./Headex"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
    withoutMargin?: boolean
  }


export const Layout: React.FC<Props> = ({ children }) => {
    return (
      <>
      <Header/>
        {children}
      </>
    )
  }