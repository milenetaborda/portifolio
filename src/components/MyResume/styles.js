import styled from 'styled-components';

export const Container = styled.div`
  background: #030303;
  padding: 65px 15vw 50px;
  max-height: 100%;

  h3 {
    text-transform: uppercase;
  }

  ul {
    display: grid;
    margin: 40px 0;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));

    li {
      display: flex;

      > p {
        background: orange;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 4px 0;

        svg {
          font-size: 20px;
        }
      }

      div{
      background: #171717;
      margin: 0 25px 25px;
      padding: 10px;
      box-shadow: 0px 0px 8px 5px #060606;
      border-left: 2px solid orange;
      opacity: 0.8;     

      h1 {
        font-size: 16px;
      }

      strong {
        color: orange;

        > span {
          color: lightgray;
        }
      }
      }
      p {
        margin: 10px 0;
        border-top: 1px solid lightgray;
        padding: 5px;
      }
    }
  }

`