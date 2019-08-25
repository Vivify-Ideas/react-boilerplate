import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../AppBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  }
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </div>
  );
}

export default Layout;

export function withLayout(Component) {
  return props => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
