import styled from 'styled-components';
import { darken } from 'polished';

import photo from '../../assets/photome.png'

export const Container = styled.div`
    padding: 0 10vh;
    min-height: 100vh;
   background-image: url(${photo}); 
   background-repeat: no-repeat;
   background-size: cover;
   background-position-x: unset;

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
        font-size: 16px;  
      }

      > span {
        position: absolute;
        left: 0;
        margin: -0.8vw 15vw;
        width: 50px;
        border-bottom: 2px solid  #cc7f39;
      }

      section {
        display: flex;
        flex-direction: column;

        h1 {
          width: 48vw;
          padding: 8px 0;
        }

      h1 > span {
          color:   #cc7f39;
      }

      ul {
        display: flex;

        li {
          border: 1px solid rgba(220, 220, 220, 0.1);
          padding: 7px 10px;
          border-radius: 50%;
          margin: 40px 10px 0;
          cursor: pointer;

          a {
            text-decoration: none;
            color: #fff;
          }
 
          :hover {
            background: ${darken(0.03, '#cc7f39' )};
          }
        }
      }

      }
    }
`;

export const Button  = styled.button`
    background: transparent;
    padding: 14px 0;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    border: none;
    border-radius: 24px;
    outline: none;
    cursor: pointer;
    

    :nth-child(2) {
      background: linear-gradient(to right, #c79864, #cc7f39);
    }

    a {
      text-decoration: none;
      color: #fff;
    }

`
