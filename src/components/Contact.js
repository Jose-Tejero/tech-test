import React from 'react';
import AdminPhoto from './AdminPhoto';
import { FormBody, Form, FormContainer } from './StyledComponents';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit = userContact => {
        console.log(userContact);
        dispatch({type: 'SET_EMAIL', payload: userContact.email});
        dispatch({type: 'SET_TEL', payload: userContact.tel});
        reset();
    }

    return (
        <FormBody>
            <AdminPhoto />
            <FormContainer>
                <h3>Datos de contacto</h3>
                <Form onSubmit={handleSubmit(submit)} >
                    <input type="email" placeholder='Correo electrónico' required {...register('email')} />
                    <input type="tel" placeholder='Teléfono celular' required {...register('tel')} />
                    <button></button>
                </Form>
            </FormContainer>
        </FormBody>
    );
};

export default Contact;