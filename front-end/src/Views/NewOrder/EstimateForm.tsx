import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { AutocompleteField } from "../../components/AutocompleteField";
import { CustomButton } from "../../components/CustomButton";
import * as yup from 'yup';
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";

type FormValues = {
    pickupAddress: Address | null
    deliveryAddress: Address | null
    comments: string
  }

export function EstimateForm () {
  const formik = useFormik<FormValues>({
    initialValues: {
      pickupAddress: null,
      deliveryAddress: null,
      comments: ''
    },
    validationSchema: yup.object().shape({
      pickupAddress: yup.object()
        .typeError('Selecione um endereço na lista.'),
      deliveryAddress: yup.object()
        .typeError('Selecione um endereço na lista.'),
      comments: yup.string()
        .required('Informe as instruções.')
    }),
    onSubmit: async (values) => {
      await createEstimate(values as NewEstimateInput)
    }
  })
  const getFieldProps = (fieldName: keyof FormValues) => {
    return {
      ...formik.getFieldProps(fieldName),
      controlId: `input-${fieldName}`,
      error: formik.errors[fieldName],
      isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
      isValid: formik.touched[fieldName] && !formik.errors[fieldName],
      
    };
  };
    return (
        <>
          <Form onSubmit={formik.handleSubmit}>
            <AutocompleteField
              {...getFieldProps('pickupAddress')}
              label="Endereço da Pet Home (A)"
              placeholder="Informe o endereço completo"
              onChange={(address) => formik.setFieldValue('pickupAddress', address)}
            />
            <AutocompleteField
              {...getFieldProps('deliveryAddress')}
              label="Endereço do Pet (B)"
              placeholder="Informe o endereço completo"
              onChange={(address) => formik.setFieldValue('deliveryAddress', address)}
            />
            <FormField
              {...getFieldProps('comments')}
              label="Observações"
              placeholder="Descreva as observações desse pedido."
              as='textarea'
            />

              <div className="d-grid d-md-block">
                <CustomButton
                  type='submit'
                  loading={formik.isValidating || formik.isSubmitting}
                  disabled={formik.isValidating || formik.isSubmitting}
                >Calcular preço</CustomButton>
              </div>
            
          </Form>
            <CustomButton
              variant="outline-primary"
              type='button'
              className='mb-3 mb-md-0'
            >Alterar endereços</CustomButton>
        </>
      )
    }