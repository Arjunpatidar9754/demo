import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux'
// import axios from 'axios'

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

// import avatar5 from '../../assets/images/avatars/avatar5.jpg';
export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth = useSelector(state => state.auth)

    // const {user, isLogged} = auth
    // uncomment upper line when use auth an remove below line
    const user = auth;

    // const handleLogout = async () => {
    //     try {
    //         await axios.get(`${process.env.REACT_APP_API_HOSTNAME}/user/logout`)
    //         localStorage.removeItem('firstLogin')
    //         window.location.href = "/";
    //     } catch (err) {
    //         window.location.href = "/";
    //     }
    // }

    // const userLink = () => {
    //     return <li className="drop-nav">
    //         <Link to="#" className="avatar">
    //         <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
    //         </Link>
    //         <ul className="dropdown">
    //             <li><Link to="/profile">Profile</Link></li>
    //             <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
    //         </ul>
    //     </li>
    // }

    // const transForm = {
    //     transform: isLogged ? "translateY(-5px)" : 0
    // }
    

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
          <Avatar sizes="44" alt="Emma Taylor" src={user.avatar} />
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">Arjun patidar</div>
          <span className="text-white-50">React Developer</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <Avatar sizes="44" alt="Emma Taylor" src={user.avatar} />
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                Arjun patidar
              </div>
              <span className="text-black-50 text-center">
                React Developer
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>My Account</ListItem>
            <ListItem button>Profile settings</ListItem>
            <ListItem button>Active tasks</ListItem>
            <Divider className="w-100" />
            <ListItem className="d-block rounded-bottom px-3 pt-3 pb-0 text-center">
              <Tooltip arrow title="Twitter">
                <Button color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
