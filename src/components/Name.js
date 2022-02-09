import React from 'react';
import styled from 'styled-components';
import AdminPhoto from './AdminPhoto';

const Name = () => {

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
        justify-content: center;
        align-items: center;
    `,
    FormBox = styled.form `
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
        gap: 5px
    `;

    return (
        <FormBody>
            <AdminPhoto />
            <Form>
                <h3>¿Cuál es tu nombre?</h3>
                <FormBox>
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Segundo nombre' />
                    <input type="text" placeholder='Apellido paterno' />
                    <input type="text" placeholder='Apellido materno' />
                </FormBox>
            </Form>
        </FormBody>
    );
};

export default Name;