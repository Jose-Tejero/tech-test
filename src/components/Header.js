import React from 'react';
import styled from 'styled-components';

const Header = () => {

    const Header = styled.div `
        margin: 0;
        padding: 40px 10px;
        background-color: #f174dc;
        display: grid;
        grid-template-columns: 3fr 1fr;
    `,
    Paragraph = styled.p `
        color: #000;
        margin: 0;
        padding: 10px;
    `,
    FormTitle = styled.h3 `
        margin: 0;
        padding: 10px;
    `,
    BigIcon = styled.i `
        color: #FFF;
        font-size: 80px;
        text-align: center;
    `;

    return (
        <Header>
            <FormTitle>Título de formulario</FormTitle>
            <BigIcon><i class="fa-solid fa-clipboard-check"></i></BigIcon>
            <Paragraph><i class="fa-solid fa-stopwatch"></i> En menos de 5 minutos.</Paragraph>
        </Header>
    );
};

export default Header;