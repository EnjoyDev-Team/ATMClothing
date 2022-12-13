import React, { useEffect } from 'react';
import './styles/style.scss';
import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Navigation from './routes';
import 'react-toastify/dist/ReactToastify.css';
import auth from './utils/auth';
import { axiosPrivate } from './api/axios';
import { init } from './store/reducers/cartSlice';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (auth.getAccessToken()) {
      axiosPrivate.get(`/carts?idUser=${auth.getId()}`)
        .then(res => {
          dispatch(init(res.data.data));
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navigation />
    </div>
  );
};

export default App;
