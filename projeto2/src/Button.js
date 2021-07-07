import React, { useState } from 'react';

const Button = ({ label, method }) => {
  return <button onClick={method}>{label}</button>;
};

export default Button;
