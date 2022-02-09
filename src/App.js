import './App.css';
import Birthday from './components/Birthday';
import Header from './components/Header';
import Name from './components/Name';
import Contact from './components/Contact';
import { GlobalStyle } from './components/StyledComponents';

function App() {

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
