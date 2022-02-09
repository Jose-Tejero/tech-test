import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components/StyledComponents';

// Aquí importamos el reducer creado anteriormente
import rootReducer from './redux' 

const store = createStore(
		rootReducer,
		composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);