import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { changePasswordSchema } from './validations';
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

export default function ChangePasswordForm({ onSubmit, isPending }) {
  const classes = useStyles();

  function handleOnSubmit(values, { setErrors, resetForm }) {
    const { currentPassword, newPassword, newPasswordConfirmation } = values;
    onSubmit(
      currentPassword,
      newPassword,
      newPasswordConfirmation,
      setErrors,
      resetForm
    );
  }

  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      }}
      validationSchema={changePasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className={classes.form}>
        <Field
          component={FormikTextField}
          type="password"
          name="currentPassword"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.currentPasswordInputLabel} />}
        />
        <Field
          component={FormikTextField}
          type="password"
          name="newPassword"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.newPasswordInputLabel} />}
        />
        <Field
          component={FormikTextField}
          type="password"
          name="newPasswordConfirmation"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={
            <FormattedMessage {...messages.newPasswordConfirmationInputLabel} />
          }
          customErrorMessageValues={{
            value: <FormattedMessage {...messages.newPasswordInputLabel} />
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
          <FormattedMessage {...messages.changePasswordButton} />
        </Button>
      </Form>
    </Formik>
  );
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
