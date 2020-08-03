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
     width: 480px; 
      padding: 8px 10px;
      border-radius: 24px;
      box-shadow: 1px 1px 10px 5px #191919;

      li {
        margin: 0 30px;
        cursor: pointer;
      }
    }
  }

  > ul {
    display: grid;
    margin: 40px 0;
    grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));

     li {
      background: whitesmoke;
      margin: 0 10px 0 0;
      height: 250px;
      color: black;

      img {
        width: 10%;
        height: 10px;

        div{
          position: absolute;
          color: black;
        }
      }
    }
  }

  > button {
    border: none;
    padding: 8px 12px;
    border-radius: 12px;
    background: linear-gradient(to right, #c79864, #cc7f39);
    width: 170px;
    font-weight: 600;
    margin: 10px auto;
    margin-left: 29vw;
    color: #fff;
  }
`

export const Button  = styled.button`
  background: ${ (props) => props.selected ? "linear-gradient(to right, #c79864, #cc7f39)" : "transparent"};
  border: none;
  padding: 10px ;
  font-weight: 600;
  line-height: 1;
  letter-spacing: .3px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  border-radius: 24px;
  text-transform: uppercase;
`