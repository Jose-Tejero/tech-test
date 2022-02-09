import React from 'react';
import styled from 'styled-components';

const Header = () => {

    const Header = styled.div `
        margin: 0;
        padding: 0;
        background-color: #f174dc;
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