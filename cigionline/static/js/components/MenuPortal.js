import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const MenuPortal = ({ children }) => {
  const modalRoot = document.getElementById('annual-report-interactives-menu');

  return createPortal(children, modalRoot);
};

export default MenuPortal;