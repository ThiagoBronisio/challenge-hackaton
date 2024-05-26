import styled from "styled-components";

export const Separator = styled.hr`
    border: 1px solid #d2d2d2;
    box-sizing:border-box;
    width:100%;
    @media (max-width: 767px){
        display: none;
    }
`
export const ContainerHeader = styled.div`
    display: flex;
    padding: 12px 32px;
    height: 96px;
    justify-content: space-between;
    align-items: end;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    @media (max-width: 767px){
        padding: 12px 12px;
    }
    
`

export const ButtonEvolucao = styled.button`
    height: 48px;
    width: 150px;
    background-color: #21b9de ;
    color: white;
    border-radius: 8px;
`

export const WrapperLogoGiom = styled.div`
    height: 100%;
    display: flex;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

export const WrapperImgCompany = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
       
    p {
        display: flex;
        text-align: center;
        width: 100%;
    }
    
`
export const WrapperImgCompanyContent = styled.div`
    display: flex;
    justify-content: center;
    div {
        width: 48px;
        height: 48px;
        justify-content: center;
        display: flex;
        background-color: #87d2e4;
        border-radius: 50%;
        border: 1px solid #6f6f6f;
        img {
        padding-top:10px ;
        width: 32px;
        height: 32px;
        }
    }
`
export const ContainerMain = styled.div`
    display: flex;
    padding: 32px;
    padding-bottom: 0;
`

export const ContainerInto = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;

div {
    height: 100%;
    display: flex;
    align-items: center;
    div {
        display: flex !important;
        height: auto;
        flex-direction: column;
        align-items: center;
        span {
        font-size: 28px;
        }
    a {
        width: 100%;
    }
    }
}
    
`
export const ButtonMain = styled.button`
display: flex;
justify-content: center;
align-items: end;
border: 2px solid #21b9de;
background-color: #87d2e4;
height: 48px;
width: 50%;
padding: 10px;
border-radius: 20px;
margin-top: 16px;
color: white;
font-weight: bold;

&:hover {
    background-color: #21b9de;
    border-color: #87d2e4;
    color: #000;
    transition: all 0.3s ease
  }
`

export const ContainerLottie = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    height: 100%;
    @media (max-width: 1023px){
        display: none;
        padding: 12px;
    }

    div {
        max-width: 600px;
        max-height: 600px;
        svg {
            
        }
    }
`

export const ContainerChart = styled.div`
    display: flex;
    padding: 32px;
    div{
        border-radius: 5px;
    }
    
    background-color: #f6f6f6;

    @media (max-width: 1023px){
        display: block;
        padding: 12px;
    }

`
export const WrapperContainerChart = styled.div`
    max-width: 600px;
    max-height: 400px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 1023px){
        display: block;
        max-width: 100%;
        margin-right: 0;
    }

`

export const WrapperContainerText = styled.div`
    width: 100%;
    margin-left: 12px;
    padding: 36px 72px;
    justify-content: center;
    display: flex;
    align-items: center;
    @media (max-width: 1023px){
        align-items: center;
        line-height: 26px;
        margin-left: 0;
        padding: 12px;
        margin-top: 16px;
    }

    h1 {
        padding: 10px 0;
        text-align: start;
        line-height: 26px;
        font-size: 26px;
        margin-bottom: 12px;
    }
`

export const ContainerFooter =  styled.div`
position: absolute;
box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.2);
bottom: 0;
left: 0;
right: 0;
padding: 6px 20px;
`