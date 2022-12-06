import React, { useEffect } from 'react';
import './styles/style.scss';
import { useLocation } from 'react-router';
import Navigation from './routes';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
        <Navigation />
    </div>
  );
};

export default App;
