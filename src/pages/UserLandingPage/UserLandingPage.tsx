import { Box } from '@mui/system';
import React from 'react';
import TopNav from '../../components/NavigationBar/TopNav';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import patImage from '../../assets/process.png'
import davidImage from '../../assets/accounting.png'
import profitImage from '../../assets/profit.png'


const UserLandingPage = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          mt: 15,
          p: 2,
        }}
      >
        <SingleProduct image={davidImage} title={'DavidCap'}></SingleProduct>
        <SingleProduct image={patImage} title={'PAT'}></SingleProduct>
        <SingleProduct image={profitImage}  title={'Settlement'}></SingleProduct>
      </Box>
    </React.Fragment>
  );
};

export default UserLandingPage;
