import React from 'react';
import styled from 'styled-components';
import AdminPhoto from './AdminPhoto';

const Birthday = () => {

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
        gap: 10px;
    `;

    return (
        <FormBody>
            <AdminPhoto />
            <Form>
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <FormBox>
                    <input type="number" pattern='[0-9]{2}' required placeholder='Día' />
                    <input type="number" placeholder='Mes' />
                    <input type="number" pattern='[0-9]{4}' placeholder='Año' />
                </FormBox>
            </Form>
        </FormBody>
    );
};

export default Birthday;