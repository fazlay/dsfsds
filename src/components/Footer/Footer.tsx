import { Container } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Container
      sx={{
        // position: 'absolute',
        // bottom: 0,
        backgroundColor: '#1b2635',
        color: '#fff',
        padding: 1,
      }}
    >
      @2022, Albai
    </Container>
  );
};

export default Footer;
