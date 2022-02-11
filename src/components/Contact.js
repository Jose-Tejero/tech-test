import React, { useState } from 'react';
import AdminPhoto from './AdminPhoto';
import { FormBody, Form, FormContainer } from './StyledComponents';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const [ isShowingForm, setIsShowingForm ] = useState(true);

    const submit = userContact => {
        dispatch({type: 'SET_EMAIL', payload: userContact.email});
        dispatch({type: 'SET_TEL', payload: userContact.tel});
        dispatch({type: 'SET_PROGRESS', payload: 100});
        reset();
        setIsShowingForm(false);
    }

    return (
        <FormBody>
            <AdminPhoto />
            <FormContainer>
                <h3>Datos de contacto</h3>
                {isShowingForm && (
                    <Form onSubmit={handleSubmit(submit)} >
                        <input type="email" placeholder='Correo electrónico' required {...register('email')} />
                        <input type="tel" placeholder='Teléfono celular' required {...register('tel')} />
                        <button>Enviar</button>
                    </Form>
                )}
            </FormContainer>
        </FormBody>
    );
};

export default Contact;