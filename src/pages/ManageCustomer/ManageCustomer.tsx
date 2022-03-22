import React from 'react';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import { Box, Grid } from '@mui/material';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import customerData from '../../examplejsons/userData';
import CustomerTable from '../../components/CustomerTable/CustomerTable';

const ManageCustomer = () => {
  return (
    <DashboardLayout>
      <Grid container direction="column" sx={{ p: 1 }}>
        <CustomerForm />
        {/* <h2>All Customer</h2> */}
        <CustomerTable customerData={customerData} />
      </Grid>
    </DashboardLayout>
  );
};

export default ManageCustomer;
