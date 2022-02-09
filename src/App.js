import './App.css';
import Birthday from './components/Birthday';
import Header from './components/Header';
import Name from './components/Name';
import Contact from './components/Contact';
import { useSelector } from 'react-redux';
import { Datas } from './components/StyledComponents';

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
    
  return (
    <div>
      <Header />
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
          </>
        ) : null
      }
    </div>
  );
}

export default App;
