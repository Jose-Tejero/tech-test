import './App.css';
import Birthday from './components/Birthday';
import Header from './components/Header';
import Name from './components/Name';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';

function App() {

  const GlobalStyle = createGlobalStyle `
    input {
      padding: 20px 10px;
      border: 3px solid #E0E0E0;
      background-color: #F0F0F0;
      font-size: 15px;
      border-radius: 5px;
    }

    input::placeholder {
      color: #000;
    }

    h3 {
      margin: 15px 10px;
    }
  `;

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Name />
      <Birthday />
      <Contact />
    </div>
  );
}

export default App;
