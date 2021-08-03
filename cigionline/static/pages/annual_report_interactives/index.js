import React from 'react';
import ReactDOM from 'react-dom';

window.annualReport = JSON.parse(document.getElementById('annual-report-json').textContent);

ReactDOM.render(
  <pre>{JSON.stringify(window.annualReport, null, 2)}</pre>,
  document.getElementById('annual-report-interactives'),
);
