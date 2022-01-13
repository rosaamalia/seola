import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import MainRouter from "./routes/MainRouter";
import AuthContext from './context/AuthContext';
import api from './services/api';

function App() {
  const [loggedIn, setLoggedIn] = useState({ isLoggedIn: false})

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      api.get('/profile')
      .then((res) => {
          const data = {
              isLoggedIn: true,
              data: res.data,
              token: token
          }

          setLoggedIn(data)
      })
      .catch((error) => {
          console.log(error.response?.data?.message || error);
          if(error.response.data.message === 'Token tidak valid') {
              toast.info('Sesi kamu sudah berakhir. Silahkan masuk kembali')

              setLoggedIn({ isLoggedIn: false});
              localStorage.removeItem("token");
              api.defaults.headers.common["Authorization"] = undefined;
          } else {
            toast.error(error)
          }
      })
    }
  }, []);
  
  return (
    <>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        <MainRouter></MainRouter>
      </AuthContext.Provider>
      <ToastContainer/>
    </>
  );
}

export default App;