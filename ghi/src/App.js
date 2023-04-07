import { useContext } from 'react';
// import Construct from './Construct.js'
// import ErrorNotification from './ErrorNotification';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';
import './App.css';
// import { AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import LoginForm from './LoginForm.js';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '@galvanize-inc/jwtdown-for-react';


function App() {

  const { token } = useContext(AuthContext);
  console.log(token)

  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </ColorModeProvider >
      </ThemeProvider >
    </>

  );
}

export default App;
