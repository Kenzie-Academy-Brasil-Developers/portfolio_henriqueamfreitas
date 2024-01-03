import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #FFFFFF; 
    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        img{
            border-radius: 50%;
        }
    }
    div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
        a:nth-child(1){
            background-color: #5C63ED;
            border: none;
            color: #ffffff;
            padding: 0.5rem;
            border-radius: .5rem;
            text-decoration:none;
        };
        
    }
`

export const StyledFirstSection = styled.section`
    background-color: #5C63ED; 
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
        height: 12.5rem;
        margin-left: 235px;
        color: #ffffff;
    }    
`

export const StyledSecondSection = styled.section`
    background-color: #F1F3F5; 
    color: #212529;
    padding-top: 1rem;
    div:nth-child(1){
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
        height: 6.875rem;
        margin-left: 235px;
    };
    div:nth-child(2){
        display: flex;
        width: 65vw;
        justify-content: space-around;
        img{
            width: 60px;
            height: 50px;
        }
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }    
`

export const StyledThirdSection = styled.section`
    background-color: #FFFFFF; 
    color: #212529;
    padding-top: 2rem;
    display: flex;
    div:nth-child(1){
        gap: 1rem;
        display: flex;
        flex-direction: column;
        width: 30.5%;
        padding-right: 1.3rem;
        height: 8.875rem;
        margin-left: 235px;
        a{
            background-color: #5C63ED;
            border: none;
            color: #ffffff;
            padding: 0.5rem;
            border-radius: .5rem;
            text-decoration:none;
            width: fit-content;
        }
    };
    div:nth-child(2){
        width: 32.5%;
        display: flex;
        flex-direction: column;
        h2{
            margin-bottom: 1.5rem;
        };
        ul{
            margin-top: 2.5rem;
        };
        li{
            margin-bottom: 2.5rem;
            h3{
                margin-bottom: 1.5rem;
            };
            p{
                margin-bottom: 1rem;
            };
            div{
                a{
                    margin-right: 1rem;
                    text-decoration: none;
                    color: #212529;
                }
            };    
        }
    }    
`

export const StyledFooter = styled.footer`
    background-color: #5C63ED; 
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
`

