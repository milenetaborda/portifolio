import styled from 'styled-components';

export const Container = styled.div`
  margin: 15vh 15vw ;
  display: flex;
  text-align: justify;

  img {
    width: 20vw;
    height: 20vw;
    margin: 0  35px;
    box-shadow: 8px 8px 1px 1px  #cc7f39;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main {
      h1{
        font-size: 25px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      p {
        line-height: 22px;
        margin-bottom: 25px;
      }

      h1 > svg {
        color:  #cc7f39;
      }

     
    }
  }

  button {
    border: none;
    padding: 8px 12px;
    border-radius: 12px;
    background: linear-gradient(to right, #c79864, #cc7f39);
    width: 170px;
  }

  @media only screen and (max-width: 1018px) {
     display: block;
     text-align: center;

     img {
        margin: 15px auto;
     }

     button {
       margin: 15px auto 0;
     }

    }
`