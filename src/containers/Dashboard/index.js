import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'dashbaord';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export function Dashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <Typography variant="h2" component="h1" gutterBottom>
        <FormattedMessage {...messages.startProjectHeader} />
      </Typography>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Dashboard);
