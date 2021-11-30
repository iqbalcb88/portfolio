import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

const Navigation = () => {
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
        textAlign: 'right',
      },
    },
    listItem: {
      color: '#f00',
      textDecoration: 'none',
    },
    styleAppbar: {
      [theme.breakpoints.up('sm')]: {
        padding: '0 10rem',
      },
    },
  });

  const { navItem, navIcon, navItemContainer, navLogo, listItem, styleAppbar } =
    useStyles();

  // drawer
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <ListItem button>
          <Link className={listItem} to='/home'>
            Home
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link className={listItem} to='/allProducts'>
            Projects
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link className={listItem} to='/dashBoard'>
            Contact
          </Link>
        </ListItem>{' '}
        <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar color='transparent' className={styleAppbar} position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              Hello!
            </Typography>
            <Box className={navItemContainer}>
              <Link className={navItem} to='/home'>
                <Button color='inherit'>Home</Button>
              </Link>
              <Link className={navItem} to='/allProducts'>
                <Button color='inherit'>Projects</Button>
              </Link>
              <Link className={navItem} to='/dashBoard'>
                <Button color='inherit'>Contact</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
