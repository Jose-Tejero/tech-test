import React from 'react';
import AdminPhoto from './AdminPhoto';
import { FormBody, Form, FormBox } from './StyledComponents';

const Contact = () => {

    return (
        <FormBody>
            <AdminPhoto />
            <Form>
                <h3>Datos de contacto</h3>
                <FormBox>
                    <input type="email" placeholder='Correo electrónico' />
                    <input type="tel" placeholder='Teléfono celular' />
                </FormBox>
            </Form>
        </FormBody>
    );
};

export default Contact;