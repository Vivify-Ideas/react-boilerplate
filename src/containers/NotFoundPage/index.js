import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>404 - React Boilerplate</title>
      </Helmet>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          404 | <FormattedMessage {...messages.header} />
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <FormattedMessage {...messages.backLink} />
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;
