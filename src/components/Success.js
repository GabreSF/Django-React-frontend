import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SuccessMessage = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };

  return (
    <Box sx={containerStyles}>
      <div>
        <Typography variant="h5" gutterBottom>
          Login realizado com sucesso!
        </Typography>
        <Typography variant="body1">
          Obrigado por utilizar este projeto.
        </Typography>
      </div>
    </Box>
  );
};

export default SuccessMessage;
