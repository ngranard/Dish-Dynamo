import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';
import './App.css';
import { AuthProvider } from '@galvanize-inc/jwtdown-for-react';
import LoginForm from './LoginForm.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from '@galvanize-inc/jwtdown-for-react';


function App() {
  const { token } = useToken();
  console.log(token);
  // const [launch_info, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])


  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
