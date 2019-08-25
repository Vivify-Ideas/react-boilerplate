import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Welcome - React Boilerplate</title>
      </Helmet>
      <Grid container justify="flex-end">
        <Button
          component={RouterLink}
          to="/login"
          variant="outlined"
          className={classes.button}
        >
          <FormattedMessage {...messages.loginLink} />
        </Button>
        <Button
          component={RouterLink}
          to="/register"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <FormattedMessage {...messages.registerLink} />
        </Button>
      </Grid>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          <FormattedMessage {...messages.heading} />
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          <FormattedMessage {...messages.subheading} />
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <FormattedMessage
            {...messages.builtWithLove}
            values={{
              team: (
                <Link color="inherit" href="https://www.vivifyideas.com/">
                  Vivify Ideas
                </Link>
              )
            }}
          />
        </Typography>
      </Container>
    </div>
  );
}

export default WelcomePage;
