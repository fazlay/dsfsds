import { Box } from '@mui/system';
import React from 'react';
import LoginComponent from '../../components/Login/LoginComponent';
import BrandLogo from '../../logo.svg';
const Login = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 8,
          mb: 4,
          color: 'blue',
        }}
      >
        <img src={BrandLogo} alt='' />
      </Box>
      <LoginComponent />
    </div>
  );
};

export default Login;
