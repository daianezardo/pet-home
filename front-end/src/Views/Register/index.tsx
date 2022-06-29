import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
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
                controlId="imput-name"
                label="Nome"
                placeholder="Digite aqui seu nome"
              />
              <FormField
                controlId="imput-email"
                label="E-mail"
                placeholder="Digite aqui seu e-mail"
              />
              <FormField
                controlId="imput-phone"
                label="Telefone"
                placeholder="(00) 00000-0000"
                mask={[
                  { mask: '(00) 0000-0000' },
                  { mask: '(00) 00000-0000' },
                ]}
              />
              <FormField
                controlId="imput-password"
                label="Senha"
                placeholder="Informe sua senha de acesso"
                type="password"
              />
              <Form.Group className='mb-3' controlId="input-agree">
                <Form.Check
                  type="checkbox"
                  label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</>}
                />
                </Form.Group>
                <div className="d-grid mb-4">
                <CustomButton>
                  Criar conta
                </CustomButton>
                </div>
                <p className="text-center">Já possui conta?<br/><Link to='/login'>Entrar</Link></p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
