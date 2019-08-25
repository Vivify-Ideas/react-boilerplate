import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFormikField } from 'utils/withFormikField';
import { updateUserSchema } from './validations';
import messages from './messages';
import ImageField from './ImageField';

const FormikTextField = withFormikField(TextField);
const FormikImageField = withFormikField(ImageField);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  avatar: {
    marginTop: -72,
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function UpdateUserForm({ user, onSubmit, isPending }) {
  const classes = useStyles();

  function handleOnSubmit(values, { setErrors }) {
    const { firstName, lastName, avatar } = values;
    onSubmit(firstName, lastName, avatar, setErrors);
  }

  return (
    <Formik
      initialValues={{
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        avatar: user.avatar || null
      }}
      validationSchema={updateUserSchema}
      onSubmit={handleOnSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form className={classes.form}>
          <div className={classes.avatar}>
            <Field
              component={FormikImageField}
              name="avatar"
              setFieldValue={setFieldValue}
              user={user}
            />
          </div>
          <Field
            component={FormikTextField}
            type="text"
            name="firstName"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={<FormattedMessage {...messages.firstNameInputLabel} />}
            autoFocus
          />
          <Field
            component={FormikTextField}
            type="text"
            name="lastName"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={<FormattedMessage {...messages.lastNameInputLabel} />}
          />
          <Button
            disabled={isPending}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <FormattedMessage {...messages.updateButton} />
          </Button>
        </Form>
      )}
    </Formik>
  );
}

UpdateUserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
