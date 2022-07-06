import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewOrderView () {
  return (
    <Layout>
      <Container>
        <PageTitle>Novo Pedido</PageTitle>
        <Row>
          <Col xs={12} md={6} lg={7}>
          </Col>
          <Col xs={12} md={6} lg={5} className='p-0 px-md-3'>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}