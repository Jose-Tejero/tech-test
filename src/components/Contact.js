import React from 'react';
import styled from 'styled-components';
import AdminPhoto from './AdminPhoto';

const Contact = () => {

    const FormBody = styled.div `
        background-color: #FAFAFA;
        display: grid;
        grid-template-columns: 1fr 4fr;
        padding: 40px 10px;
    `,
    Form = styled.div `
        background-color: #F0F0F0;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 0 7px;
        padding: 5px;
    `,
    FormBox = styled.form `
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
        gap: 10px
    `;

    return (
        <FormBody>
            <AdminPhoto />
            <Form>
                <h3>Datos de contacto</h3>
                <FormBox>
                    <input type="text" placeholder='Correo electrónico' />
                    <input type="text" placeholder='Teléfono celular' />
                </FormBox>
            </Form>
        </FormBody>
    );
};

export default Contact;