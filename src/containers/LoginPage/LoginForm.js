import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { loginSchema } from './validations';
import messages from './messages';
import { withFormikField } from 'utils/withFormikField';

const FormikTextField = withFormikField(TextField);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginForm({ onSubmit, isPending }) {
  const classes = useStyles();

  const handleOnSubmit = values => {
    const { email, password } = values;
    onSubmit(email, password);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={loginSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className={classes.form}>
        <Field
          component={FormikTextField}
          type="email"
          name="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.emailInputLabel} />}
          autoFocus
        />
        <Field
          component={FormikTextField}
          type="password"
          name="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.passwordInputLabel} />}
        />
        <Button
          disabled={isPending}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          <FormattedMessage {...messages.loginButton} />
        </Button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
