import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LockIcon from '@material-ui/icons/Lock';
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from 'material-ui-popup-state/hooks';
import messages from './messages';
import { DASHBOARD, USER_PROFILE } from 'routes';
import { logout } from 'containers/App/actions';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: 'inherit',
    textDecoration: 'inherit'
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  mobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function AppBar({ logout }) {
  const classes = useStyles();
  const menuState = usePopupState({
    variant: 'popover',
    popupId: 'account-menu'
  });

  function handleClose() {
    menuState.close();
  }

  function handleLogout() {
    menuState.close();
    logout();
  }

  return (
    <MaterialAppBar position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          className={classes.title}
          component={Link}
          to={DASHBOARD}
        >
          Vivify Ideas
        </Typography>
        <div className={classes.grow} />
        <IconButton color="inherit" className={classes.desktop}>
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton edge="end" color="inherit" {...bindTrigger(menuState)}>
          <AccountCircle className={classes.desktop} />
          <MoreIcon className={classes.mobile} />
        </IconButton>
        <Menu
          MenuListProps={{
            component: 'div'
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          {...bindMenu(menuState)}
        >
          <MenuItem onClick={handleClose} className={classes.mobile}>
            <Badge badgeContent={3} className={classes.icon} color="secondary">
              <NotificationsIcon color="action" />
            </Badge>
            <FormattedMessage {...messages.notificationsLink} />
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to={USER_PROFILE}>
            <AccountCircle
              className={`${classes.icon} ${classes.mobile}`}
              color="action"
            />
            <FormattedMessage {...messages.profileLink} />
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LockIcon
              className={`${classes.icon} ${classes.mobile}`}
              color="action"
            />
            <FormattedMessage {...messages.logoutLink} />
          </MenuItem>
        </Menu>
      </Toolbar>
    </MaterialAppBar>
  );
}

const mapDispatchToProps = {
  logout
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(AppBar);
