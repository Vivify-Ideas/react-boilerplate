import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFormikField } from 'utils/withFormikField';
import { resetPasswordSchema } from './validations';
import messages from './messages';

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

export default function ResetPasswordForm({ onSubmit, isPending }) {
  const classes = useStyles();

  const handleOnSubmit = (values, { setErrors }) => {
    const { password, passwordConfirmation } = values;
    onSubmit(password, passwordConfirmation, setErrors);
  };

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={resetPasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className={classes.form}>
        <Field
          component={FormikTextField}
          type="password"
          name="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.passwordInputLabel} />}
          autoFocus
        />
        <Field
          component={FormikTextField}
          type="password"
          name="passwordConfirmation"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={
            <FormattedMessage {...messages.passwordConfirmationInputLabel} />
          }
          customErrorMessageValues={{
            value: <FormattedMessage {...messages.passwordInputLabel} />
          }}
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

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
