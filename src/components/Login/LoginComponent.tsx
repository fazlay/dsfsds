import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { error } from 'console';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ILoginFormInput {
  userEmail: string;
  userPassword: string | number;
}
const onSubmit: SubmitHandler<ILoginFormInput> = (
  data: ILoginFormInput
): void => {
  console.log(data);
};
// const handleClickShowPassword = () => {
//   setValues({
//     ...values,
//     showPassword: !values.showPassword,
//   });
// };

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };
const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();
  return (
    <React.Fragment>
      <Paper
        sx={{
          paddingY: '40px',
          paddingX: '40px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '520px',
        }}
      >
        {/* <Box
          sx={{
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{ marginBottom: 4 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Box> */}
        <Typography variant="h5" align="center" component="h5" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="body1" align="center" component="span">
          Sign in to your account to continue
        </Typography>
        {/* ---------------------------------------------LOGIN INPUT START ----------------------------- */}

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            id="userEmail"
            sx={{ my: 2 }}
            label="Email"
            {...register('userEmail', { pattern: /^[A-Za-z]+$/i })}
          />
          <TextField
            type="password"
            id="userPassword"
            label="Password"
            fullWidth
            sx={{ my: 2 }}
            {...register('userPassword', { required: true })}
            helperText={
              errors.userPassword && (
                <Typography variant="overline" display="block" color="red">
                  Password Required
                </Typography>
              )
            }
          />

          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

            // disabled={isSubmitting}
          >
            Sign in
          </Button>
        </Box>
        <Button
          // component={Link}
          // to="/auth/reset-password"
          fullWidth
          color="primary"
        >
          Forgot password
        </Button>
      </Paper>
    </React.Fragment>
  );
};

export default LoginComponent;
