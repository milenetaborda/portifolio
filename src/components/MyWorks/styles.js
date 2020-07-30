import styled from 'styled-components';

export const Container = styled.div`
  padding: 65px 15vw 50px;
  max-height: 100%;

  h3 {
    text-transform: uppercase;
  }

  div {
    ul {
      display: flex;
      justify-content: center;
      margin: 35px auto 0;
      width: 400px;
      padding: 10px;
      border-radius: 20px;
      box-shadow: 1px 1px 10px 5px #191919;

      li {
        margin: 0 30px;
        cursor: pointer;

        button {
          background: transparent;
          color: white;
          border: none;
          cursor: pointer;
        }

        :hover {
          background: orange;
        }
      }
    }
  }

  > ul {
    display: grid;
    margin: 40px 0;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

     li {
      background: whitesmoke;
      margin: 0 10px 0 0;
      height: 250px;
    }
  }
`