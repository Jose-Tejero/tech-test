import Birthday from './components/Birthday';
import Header from './components/Header';
import Name from './components/Name';
import Contact from './components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { Datas, MainDatas, AppComponent, ChatContainer, LastButton } from './components/StyledComponents';
import Validation from './components/Validation';

function App() {

  const userName = useSelector(state => state.name);
  const userSecondName = useSelector(state => state.secondName);
  const userLastname = useSelector(state => state.lastname);
  const userSecondLastname = useSelector(state => state.secondLastname);
  const userDay = useSelector(state => state.day);
  const userMonth = useSelector(state => state.month);
  const userYear = useSelector(state => state.year);
  const userEmail = useSelector(state => state.email);
  const userTel = useSelector(state => state.tel);
  const dataComplete = useSelector(state => state.complete);

  const dispatch = useDispatch();
    
  return (
    <AppComponent>
      <Header />
      <ChatContainer>
        <Name />
        {
          userName ? (
            <>
              <Datas><p>{userName} {userSecondName} {userLastname} {userSecondLastname}</p></Datas>
              <Birthday />
            </>
          ) : null
        }
        {
          userYear ? (
            <>
              <Datas><p>{userDay} {userMonth} {userYear}</p></Datas>
              <Contact />
            </>
          ) : null
        }
        {
          userTel ? (
            <>
              <Datas>
                <p>Correo electrónico: {userEmail}</p>
                <p>Teléfono celular: {userTel}</p>
              </Datas>
              <Validation />
              <LastButton onClick={() => {
                sessionStorage.name = `${userName}`;
                sessionStorage.secondName = `${userSecondName}`;
                sessionStorage.lastname = `${userLastname}`;
                sessionStorage.day = `${userDay}`;
                sessionStorage.month = `${userMonth}`;
                sessionStorage.year = `${userYear}`;
                sessionStorage.email = `${userEmail}`;
                sessionStorage.tel = `${userTel}`;

                dispatch({type: 'SET_COMPLETE', payload: true});

              }}>
                Iniciar
              </LastButton>

            </>
          ) : null
        }
        {
          dataComplete ? (
            <MainDatas>
              <p>Fecha de nacimiento: {userDay} {userMonth} {userYear}.</p>
              <p>Correo electrónico: {userEmail}</p>
              <p>Teléfono celular: {userTel}</p>
              <p>Nombre: {userName} {userSecondName} {userLastname} {userSecondLastname}</p>
            </MainDatas>
          ) : null
        }
      </ChatContainer>
    </AppComponent>
  );
}

export default App;
