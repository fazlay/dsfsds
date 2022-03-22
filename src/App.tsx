import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import ManageCustomer from './pages/ManageCustomer/ManageCustomer';
import UserLandingPage from './pages/UserLandingPage/UserLandingPage';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-customer" element={<ManageCustomer />} />

        <Route path="/login" element={<Login />} />
        <Route path="/user-landing" element={<UserLandingPage />} />
      </Routes>
      {/* <TopNav /> */}
    </ThemeProvider>
  );
}

export default App;
