import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';
import adminImage from '../images/admin.jpg'

export const FormBody = styled.div `
background-color: #FAFAFA;
display: grid;
grid-template-columns: 1fr 4fr;
padding: 40px 10px;
`;

export const Form = styled.div `
background-color: #F0F0F0;
display: flex;
flex-direction: column;
text-align: left;
margin: 0 7px;
padding: 5px;
`;

export const FormBox = styled.form `
display: flex;
flex-direction: column;
justify-content: center;
padding: 5px;
gap: 10px;
`;

export const HeaderApp = styled.div `
margin: 0;
padding: 40px 10px;
background-color: #F174DC;
display: grid;
grid-template-columns: 3fr 1fr;
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