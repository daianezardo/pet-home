import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function NotFoundView () {
  return (
    <Layout>
      <Container className="text-center">
        <p>Página não encontrada</p>
        <p>A página que você está tentando acessar não foi encontrada ou foi movida.</p>
        <p>Utilize o menu superior para encontrar o que deseja.</p>
      </Container>
    </Layout>
  )
}