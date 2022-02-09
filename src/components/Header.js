import React from 'react';
import { HeaderApp, FormTitle, BigIcon, Paragraph } from './StyledComponents';

const Header = () => {

    return (
        <HeaderApp>
            <FormTitle>Título de formulario</FormTitle>
            <BigIcon><i class="fa-solid fa-clipboard-check"></i></BigIcon>
            <Paragraph><i class="fa-solid fa-stopwatch"></i> En menos de 5 minutos.</Paragraph>
        </HeaderApp>
    );
};

export default Header;