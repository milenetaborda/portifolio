import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 0 10vw;
    min-height: 100vh;
    background: #030303;

    header {
     padding: 15px 50px;
      display: flex;
      justify-content: space-between;

      img {
        width: 60px;
      }

      button {
        padding: 8px 12px;
        margin: 10px 5px;
        border: none;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      margin: 30vh 5vw  0;
      font-size: 20px;

      h1, h2 {
        text-transform: uppercase;
      }

      h2 {
        font-size: 18px;   
      }

      h6 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
      }

      > span {
        position: absolute;
        left: 0;
        margin: -0.8vw 15vw;
        width: 50px;
        border-bottom: 2px solid orange;
      }

      section {
        display: flex;
        flex-direction: column;

        h1 {
          width: 48vw;
          padding: 8px 0;
        }

      h1 > span {
          color:  orange;
      }

      /* article {
        position: absolute;
        width: 300px;
        height: 400px;
        border: 2px solid orange;
        left: 45vw;
        top: 20vh;
      } */

      ul {
        display: flex;

        li {
          border: 1px solid rgba(220, 220, 220, 0.4);
          padding: 7px 10px;
          border-radius: 50%;
          margin: 20px 10px;
          cursor: pointer;

          :hover {
            background: ${darken(0.03, 'orange' )};
          }
        }
      }

      }
    }
`;

export const Button  = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background: orange;
  border: none;

  :hover {
    background: darken(0.5, "orange")
  }
`
