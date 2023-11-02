import React from 'react';
import AppBar from '../components/AppBar';
import CollapsibleTable from '../components/table-home'


const Home = () => {
  return (
    <div>
      <AppBar /> {/* Renderize o componente AppBar aqui na sua página Home */}
      <CollapsibleTable />
    </div>
  );
};

export default Home;