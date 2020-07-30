import styled from 'styled-components';

export const Container = styled.div`
  margin: 15vh 15vw ;
  display: flex;
  text-align: justify;

  img {
    width: 20vw;
    height: 20vw;
    margin: 0  35px;
    box-shadow: 8px 8px 1px 1px orange;
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
      }

      h1 > svg {
        color: orange;
      }
    }
  }

  button {
    border: none;
    padding: 8px 12px;
    border-radius: 12px;
    background-image: linear-gradient(to right, orange, #ff8303);
    width: 170px;
  }
`