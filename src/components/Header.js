import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderApp, FormTitle, BigIcon, Paragraph, ProgressBarGray, ProgressBarPink } from './StyledComponents';

const Header = () => {

    const progressUpgrade = useSelector(state => state.progress);

    return (
        <HeaderApp>
            <FormTitle>Título de formulario</FormTitle>
            <BigIcon><i className="fa-solid fa-clipboard-check"></i></BigIcon>
            <Paragraph><i className="fa-solid fa-stopwatch"></i> En menos de 5 minutos.</Paragraph>
            <ProgressBarGray />
            <ProgressBarPink progressUpgrade={progressUpgrade} />
        </HeaderApp>
    );
};

export default Header;