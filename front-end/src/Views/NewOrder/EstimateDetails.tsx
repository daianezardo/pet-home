import styled from "styled-components"


export function EstimateDetail () {
    return (
      <WithoutEstimateStyled className="d-none d-md-flex">
        <p className="m-0">Preencha os dados ao lado para visualizar o valor.</p>
        </WithoutEstimateStyled>
        )
      }
      
    
    
    const WithoutEstimateStyled = styled.div`
      background-color: #efefef;
      border: 1px dashed #000;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 130px;
      text-align: center;
    `
    
