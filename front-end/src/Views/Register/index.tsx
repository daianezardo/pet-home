import { Col, Container, Form, Row } from "react-bootstrap";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView () {
    return (
        <Layout>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <PageTitle>Nova conta</PageTitle>
              <FormField
                controlId="userName"
                label="Nome"
                placeholder="Digite aqui seu nome"
                error='Preencha o seu nome'
                isInvalid
                mask={[
                  {mask: '000.000.000-00'}
                ]}
              />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
