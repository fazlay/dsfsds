import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FaBars } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

export default function TopNav() {
  const theme = useTheme();
  const useStyles = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important',
      },
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important',
      },
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
      },
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo } = useStyles();
  const [state, setState] = React.useState(false);
  const list = (
    <Box sx={{ width: 'auto' }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FaBars /> : <FaBars />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FaBars /> : <FaBars />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: 'none' }}>
          <Toolbar>
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Albai
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <FaBars />
            </IconButton>

            <Box className={navItemContainer}>
              <Link className={navItem} to="">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button color="inherit">Login</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          {/* <Button >Click</Button> */}
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
