import React from 'react';
import AdminPhoto from './AdminPhoto';
import { FormBody, Form, FormContainer } from './StyledComponents';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Birthday = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit = (userBirthday, e) => {
        e.preventDefault();
        console.log(userBirthday);
        dispatch({type: 'SET_DAY', payload: userBirthday.day});
        dispatch({type: 'SET_MONTH', payload: userBirthday.month});
        dispatch({type: 'SET_YEAR', payload: userBirthday.year});
        reset();
    }

    let daysFor = [];
    for (let i = 1; i < 32; i++) {
        daysFor.push(<option key={i} value={i} >{i}</option>)
    }
    
    const months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    const monthsMap = months.map((month, i) => <option key={i} value={month} >{month}</option>);
    
    let yearsFor = [];
    for (let i = 1950; i < 2022; i++) {
        yearsFor.push(<option key={i} value={i} >{i}</option>)
    }

    return (
        <FormBody>
            <AdminPhoto />
            <FormContainer>
                <h3>¿Cuál es tu fecha de nacimiento?</h3>
                <Form onSubmit={handleSubmit(submit)} >
                    <select required {...register('day')} >
                        <option value='' >Día</option>
                        {daysFor}
                    </select>
                    <select required {...register('month')} >
                        <option value='' >Mes</option>
                        {monthsMap}
                    </select>
                    <select required {...register('year')}>
                        <option value='' >Año</option>
                        {yearsFor}
                    </select>
                    <button>Enviar</button>
                </Form>
            </FormContainer>
        </FormBody>
    );
};

export default Birthday;