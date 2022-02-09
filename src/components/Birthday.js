import React from 'react';
import AdminPhoto from './AdminPhoto';
import { FormBody, Form, FormBox } from './StyledComponents';

const Birthday = () => {

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