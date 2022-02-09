import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

const styledComponents = () => {

    let mainColor = '#db7093',
        mainAlphaColor80 = '#db709380';

    const setTransitionTime = time => `all ${time} ease-in-out`;

    const fadeIn = keyframes `
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    const StyledH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${props => props.color || '#000'};
        background-color: ${mainColor};
        transition: ${setTransitionTime('0.5s')};
        animation: ${fadeIn} 2s ease-out ;

        ${props => props.isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `};

        &:hover {
            background-color: ${mainAlphaColor80};
        }
    `;

    const light = {
        color: '#222',
        bgColor: '#DDD'
    }

    const dark = {
        color: '#DDD',
        bgColor: '#222'
    }

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        text-align: center;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2 {
            paddin: 2rem;
            background-color: #FFF;
            color: #61DAFB;
            text-transform: uppercase;
        }
    `

    return (
        <div>
            <GlobalStyle />
            <h2>Styled-components</h2>
            <StyledH3>Este es un componente estilizado</StyledH3>
            <StyledH3 color='#61dafb'>Este es un componente estilizado</StyledH3>
            <StyledH3 isButton>Soy un h3 estilizado como botón</StyledH3>
            <ThemeProvider theme={light} >
                <Box>Soy una caja light</Box>
                <BoxRounded>Soy una caja redondeada light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark} >
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </div>
    );
};

export default styledComponents;