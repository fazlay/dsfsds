import React from 'react';
import Footer from '../../components/Footer/Footer';
import SideNav from '../../components/NavigationBar/SideNav';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SideNav>
        {children}
        <Footer />
      </SideNav>
    </>
  );
};

export default DashboardLayout;
