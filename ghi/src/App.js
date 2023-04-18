import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';
import './App.css';
import SignupForm from './SignupForm';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import LoginForm from './LoginForm.js';
import Main from './Main';
import Footer from './Footer';
import Search from './RecipeSearch';


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
            <Route path="search" element={<Search />} />

          </Routes>
        </ColorModeProvider>
      </ThemeProvider>
      <Footer />
    </>

  );
}

export default App;
