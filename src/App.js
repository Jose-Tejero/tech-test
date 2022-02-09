import './App.css';
import Birthday from './components/Birthday';
import Header from './components/Header';
import Name from './components/Name';
import Contact from './components/Contact';
import { keyframes, createGlobalStyle } from 'styled-components';

function App() {
  
  const fadeIn = keyframes `
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `;

  const GlobalStyle = createGlobalStyle `

    * {
      animation: ${fadeIn} 0.5s ease-out ;
    }

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

    input:focus {
      outline-color: #F174DC;
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
