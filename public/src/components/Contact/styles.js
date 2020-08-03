import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to right,#070707, #030303, #070707);
  padding: 65px 15vw 50px;
  max-width: 100vw;
  max-height: 100%;
  max-width: auto;
  min-height: 20vh;
  text-align: center;

 >  div {
    width: 32vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

     h1 {
      width: 200px;
      color: #cc7f39;
      font-size: 30px;
      border: 2px solid #cc7f39;
      margin: 0 0 25px ;
    }

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 500;
      font-size: 16px;  

      :nth-child(2) {
        margin: 20px 0;
      }
    }
  }

  section {
    > ul {
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
        color: #fff;
      }

      svg {
        font-size: 25px;
        margin: 25px 10px;
      }
    }
  }
`

export const Footer = styled.footer`
  padding-top:  50px  ;
  left: 0;
  height: 50px;
  bottom: 0;
  width: 95vw;
  color: white;
  text-align: center;
`