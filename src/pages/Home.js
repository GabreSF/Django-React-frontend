import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import SuccessMessage from '../components/Success';

const Home = () => {
  return (
    <div>
      <AppBar /> 
      <SuccessMessage />
    </div>
  );
};

export default Home;