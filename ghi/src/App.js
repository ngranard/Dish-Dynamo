import { useContext } from 'react';
// import Construct from './Construct.js'
// import ErrorNotification from './ErrorNotification';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';
import './App.css';
// import { AuthProvider } from '@galvanize-inc/jwtdown-for-react';
// import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm';
import { Route, Routes } from 'react-router-dom';
// import { AuthContext } from '@galvanize-inc/jwtdown-for-react';
// import useUser from './useUser';
import Nav from './Nav';
import LoginForm from './LoginForm_copy.js';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (

    <>
      <Nav />
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          </Routes>
        </ColorModeProvider>
      </ThemeProvider>
      <Footer />
    </>

  );
}

export default App;
