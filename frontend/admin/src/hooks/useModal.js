import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UseModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle,
  };
};

UseModal.propTypes = {

};

export default UseModal;
