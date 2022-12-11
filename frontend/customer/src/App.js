import React, { useEffect } from 'react';
import './styles/style.scss';
import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navigation from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
