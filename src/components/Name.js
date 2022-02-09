import AdminPhoto from './AdminPhoto';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormBody, Form, FormContainer } from './StyledComponents';

const Name = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit = (userName, e) => {
        e.preventDefault();
        console.log(userName);
        dispatch({type: 'SET_NAME', payload: userName.name});
        dispatch({type: 'SET_SECONDNAME', payload: userName.secondName});
        dispatch({type: 'SET_LASTNAME', payload: userName.lastname});
        dispatch({type: 'SET_SECONDLASTNAME', payload: userName.secondLastName});
        reset();
    }

    return (
        <FormBody>
            <AdminPhoto />
            <FormContainer>
                <h3>¿Cuál es tu nombre?</h3>
                <Form onSubmit={handleSubmit(submit)} >
                    <input type="text" placeholder='Nombre' required {...register('name')}/>
                    <input type="text" placeholder='Segundo nombre' {...register('secondName')}/>
                    <input type="text" placeholder='Apellido paterno' required {...register('lastname')}/>
                    <input type="text" placeholder='Apellido materno' {...register('secondLastName')}/>
                    <button>Enviar</button>
                </Form>
            </FormContainer>
        </FormBody>
    );
};

export default Name;