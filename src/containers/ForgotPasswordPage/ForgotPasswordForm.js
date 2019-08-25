import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { forgotPasswordSchema } from './validations';
import messages from './messages';
import { withFormikField } from 'utils/withFormikField';

const FormikTextField = withFormikField(TextField);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function ForgotPasswordForm({ onSubmit, isPending }) {
  const classes = useStyles();

  const handleOnSubmit = (values, { setErrors }) => {
    const { email } = values;
    onSubmit(email, setErrors);
  };

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={forgotPasswordSchema}
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
        <Button
          disabled={isPending}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          <FormattedMessage {...messages.resetPasswordButton} />
        </Button>
      </Form>
    </Formik>
  );
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};

export default ForgotPasswordForm;
