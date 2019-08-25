import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ErrorMessage } from 'formik';

export function withFormikField(Component) {
  return ({ field, form, customErrorMessageValues = {}, ...props }) => (
    <Component
      error={!!(form.touched[field.name] && form.errors[field.name])}
      {...field}
      {...props}
      helperText={
        <ErrorMessage name={field.name}>
          {message =>
            message.id ? (
              <FormattedMessage
                {...message}
                values={{ label: props.label, ...customErrorMessageValues }}
              />
            ) : (
              message
            )
          }
        </ErrorMessage>
      }
    />
  );
}
