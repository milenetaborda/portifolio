import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  padding: 65px 10vw 50px;

  h3 {
    text-transform: uppercase;
  }

  div {
    ul {
      display: flex;
      justify-content: center;
      margin: 35px auto 0; 
      /* width: 480px;  */
      width: 32vw;
      padding: 8px 10px;
      border-radius: 24px;
      box-shadow: 1px 1px 10px 5px #191919;

      li {
        margin: 0 2vw;
        cursor: pointer;
      }
    }
  }
 
  .container {
    width: 100%;
    min-height: 100%; 
    margin: 70px  0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    .box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 10px;
      box-sizing: border-box;
      display: inline-block;

      .imgBox {
        position: relative;
        overflow: hidden;

        img {
          width: 200px;
          height: 200px;
          transition: transform 2s;
        }
      }

      .details {
        position: absolute;
        top: 10px;
        left: 10px;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 0, 0, .8);
        transform: scaleY(0);
        transition: transform .5s;

        .content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          padding: 15px;
          color: #fff;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 20px;
            color:  #cc7f39;
          }

          p {
            margin: 10px 0 0;
            padding: 0;
          }
        }
      }

      :hover {
          .imgBox img {
            opacity: 0.9;
            transform: scale(1.1);
          }

          .details {
            transform: scaleY(1);
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
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
    }
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