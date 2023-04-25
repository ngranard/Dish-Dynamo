import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals.js';
import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@galvanize-inc/jwtdown-for-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '')

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AuthProvider tokenUrl={`${process.env.REACT_APP_USER_SERVICE_API_HOST}/token`}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
