import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsForgotPasswordPending } from './selectors';
import { forgotPassword } from './actions';
import ForgotPasswordForm from './ForgotPasswordForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'forgotPassword';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

function ForgotPasswordPage({ forgotPassword, isForgotPasswordPending }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Forgot Password - React Boilerplate</title>
      </Helmet>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.forgotPasswordTitle} />
        </Typography>
        <ForgotPasswordForm
          onSubmit={forgotPassword}
          isPending={isForgotPasswordPending}
        />
      </Paper>
    </Container>
  );
}

ForgotPasswordPage.propTypes = {
  forgotPassword: PropTypes.func,
  isForgotPasswordPending: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  isForgotPasswordPending: makeSelectIsForgotPasswordPending()
});

const mapDispatchToProps = {
  forgotPassword
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ForgotPasswordPage);
