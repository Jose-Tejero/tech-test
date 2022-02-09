import React from 'react';
import adminImage from '../images/admin.jpg'
import styled from 'styled-components';

const AdminPhoto = () => {

    const AdminImage = styled.div `
        background-image: url(${adminImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px solid #FFF;
        border-radius: 25px;
        width: 50px;
        height: 70px;
    `,
    Frame = styled.div `
        border: 1px solid #F174DC;
        border-radius: 27px;
        width: 54px;
        height: 74px;
        margin: 0 auto;
        position: relative;
    `,
    Logo = styled.div `
        width: 20px;
        height: 20px;
        background-color: #F174DC;
        border-radius: 10px;
        position: absolute;
        bottom: -2.5px;
        right: -2.5px;
    `;

    return (
        <>
            <Frame>
                <AdminImage></AdminImage>
                <Logo></Logo>
            </Frame>
        </>
    );
};

export default AdminPhoto;