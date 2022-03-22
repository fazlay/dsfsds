import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
// import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

interface IFormInput {
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  customerEmail: string;
  selectApplication: Array<any>;
  activeStatus: boolean;
}

const productPackages = [
  {
    value: 'basic',
    label: 'Basic',
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
  },
  {
    value: 'premium',
    label: 'Premium',
  },
];

const customerTypes = [
  {
    value: 'service-provider',
    label: 'Service Provider',
  },
  {
    value: 'service-receiver',
    label: 'Service Receiver',
  },
];

export default function CustomerForm() {
  const { control, register, handleSubmit } = useForm<IFormInput>();
  const [customerType, setCustomerType] = React.useState('service-provider');
  const [productPackage, setProductPackage] = React.useState('basic');

  const handlePackageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductPackage(event.target.value);
    console.log(event.target.value);
  };
  const handleCustomerType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerType(event.target.value);
    console.log(event.target.value);
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data, customerType, productPackage);
  };

  return (
    <Box
      sx={{
        mb: 2,
        color: '#fff',
        boxShadow: 3,
        p: 2,
        backgroundColor: '#2E3A4C',
      }}
    >
      <Typography sx={{ mb: 2 }} variant="h6" component="div">
        Add Customer
      </Typography>
      <Box
        component="form"
        sx={{ color: '#fff' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
              label="Customer Name"
              {...register('customerName', { required: true, maxLength: 20 })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
              label="Customer Address"
              {...register('customerAddress', { pattern: /^[A-Za-z]+$/i })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
              label="Customer Phone"
              {...register('customerPhone', { pattern: /^[A-Za-z]+$/i })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
              label="Customer Email"
              type="email"
              {...register('customerEmail', { pattern: /^[A-Za-z]+$/i })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
              label="Domain"
              {...register('customerName', { required: true, maxLength: 20 })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              select
              label="Customer Type"
              value={customerType}
              onChange={handleCustomerType}
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
            >
              {customerTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* </Grid>

        <Typography variant="body1" gutterBottom>
          Select Product
        </Typography>
        <Grid container spacing={2}> */}
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="PAT(Process Assessment Tool)"
            />
            <TextField
              select
              label="Select Package"
              value={productPackage}
              onChange={handlePackageSelect}
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
            >
              {productPackages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* <br /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Settlement Solution"
            />
            <TextField
              select
              label="Select Package"
              value={productPackage}
              onChange={handlePackageSelect}
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
            >
              {productPackages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* <br /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="DavidCap"
            />
            <TextField
              select
              label="Select Package"
              value={productPackage}
              onChange={handlePackageSelect}
              sx={{ borderColor: '#fff', m: 1, width: '90%' }}
            >
              {productPackages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box sx={{ borderColor: '#fff', m: 1 }}>
              <label>Active Status</label>
              <Controller
                name="activeStatus"
                control={control}
                render={({ field }) => <Switch {...field} />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-name"
              // color="primary"
              sx={{
                borderColor: '#fff',
                mx: 1,
                width: '90%',
                '&:hover': {
                  background: '#4782da',
                  cursor: 'pointer',
                },
              }}
              type="submit"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
