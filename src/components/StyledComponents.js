import styled, {keyframes, createGlobalStyle} from 'styled-components';
import adminImage from '../images/admin.jpg'

export const AppComponent = styled.div `
    scroll-behavior: smooth;
`;

export const FormBody = styled.div `
    background-color: #FAFAFA;
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 40px 10px;
    scroll-behavior: smooth;
`;

export const ChatContainer = styled.div `
    max-width: 450px;
    margin: 200px auto 0 auto;
`;

export const FormContainer = styled.div `
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 7px;
    padding: 5px;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    gap: 10px;
    position: relative;
`;

export const HeaderApp = styled.div `
    max-width: 450px;
    margin: auto;
    width: 100%;
    padding: 40px 10px;
    background-color: #F174DC;
    display: grid;
    grid-template-columns: 3fr 1fr;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

export const Paragraph = styled.p `
    color: #000;
    margin: 0;
    padding: 10px;
`;

export const FormTitle = styled.h3 `
    margin: 0;
    padding: 10px;
`;

export const BigIcon = styled.i `
    color: #FFF;
    font-size: 80px;
    text-align: center;
`;

export const AdminImage = styled.div `
    background-image: url(${adminImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #FFF;
    border-radius: 25px;
    width: 50px;
    height: 70px;
`;

export const Frame = styled.div `
    border: 2px solid #F174DC;
    border-radius: 27px;
    width: 54px;
    height: 74px;
    margin: 0 auto;
    position: relative;
`;

export const Logo = styled.div `
    width: 20px;
    height: 20px;
    background-color: #F174DC;
    border-radius: 10px;
    position: absolute;
    bottom: -2.5px;
    right: -2.5px;
`;

export const Datas = styled.div `
    background-color: #F174DC;
    width: 300px;
    padding: 10px 10px;
    margin-left: auto;
    border-radius: 10px
`;

export const UserValidation = styled.div `
    background-color: #F0F0F0;
    width: 250px;
    padding: 20px 10px;
    margin-left: auto;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const MainDatas = styled.div `
    background-color: #F174DC;
    width: 300px;
    padding: 10px 20px;
    margin: 20px auto;
    border-radius: 10px;
`;

export const ProgressBarGray = styled.div `
    max-width: 470px;
    width: 100%;
    height: 10px;
    background-color: #d675c4;
    position: absolute;
    top: 199px;
`;

export const ProgressBarPink = styled.div `

    max-width: 470px;
    width: ${props => props.progressUpgrade}%;
    height: 10px;
    background-color: #ee4183;
    position: absolute;
    top: 199px;
    z-index: 30;
    transition: 0.5s ease-out;
`;

export const LastButton = styled.button `
    background-color: #ee4183;
    max-width: 400px;
    width: 100%;
    color: #FAFAFA;
    font-weight: 900;
    margin: 20px auto;
`;
  
const fadeIn = keyframes `
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

export const GlobalStyle = createGlobalStyle `

  * {
    animation: ${fadeIn} 0.5s ease-out ;
    margin: 0;
    scroll-snap-type: y mandatory;
    scroll-snap-align: end;
  }

  html {
  }

  body {
    scroll-behavior: smooth;
    background-color: #FAFAFA;
  }

  input, select {
    padding: 20px 10px;
    border: 3px solid #E0E0E0;
    background-color: #F0F0F0;
    font-size: 15px;
    border-radius: 5px;

    &::placeholder {
        color #000;
    }

    &:focus {
        outline-color: #F174DC;
    }
  }

  select {
      appearance: none;

      &::-ms-expand {
          width: 300px;
          height: 200px;
      }
  }

  h3 {
    margin: 15px 10px;
  }

  button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 50px;
      margin: 0 auto;
      background-color: #F174DC;
      border: none;
      border-radius: 10px
  }

  div {
      background-color: #FAFAFA;
  }

  p {
      margin: 8px 0;
  }
`;