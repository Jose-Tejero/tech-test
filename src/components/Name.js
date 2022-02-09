import React, { useState } from 'react';
import AdminPhoto from './AdminPhoto';
/* import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'; */
import { FormBody, Form, FormBox } from './StyledComponents';

const Name = () => {

    /* const [ name, setName ] = useState('');
    const [ secondName, setSecondName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ secondLastName, setSecondLastName ] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm(); */

    /* const submit = userName => {
        console.log(userName);

        dispatch({type: 'SET_NAME', payload: name});
    } */

    return (
        <FormBody>
            <AdminPhoto />
            <Form>
                <h3>¿Cuál es tu nombre?</h3>
                <FormBox /* onSubmit={handleSubmit(submit)} */ >
                    <input type="text" placeholder='Nombre' required/>
                    <input type="text" placeholder='Segundo nombre' />
                    <input type="text" placeholder='Apellido paterno'required/>
                    <input type="text" placeholder='Apellido materno' />
                </FormBox>
            </Form>
        </FormBody>
    );
};

export default Name;