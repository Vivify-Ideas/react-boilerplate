import * as Yup from 'yup';
import messages from '../messages';

Yup.setLocale({
  mixed: {
    required: messages.required,
    oneOf: messages.oneOf
  },
  string: {
    email: messages.email
  }
});

export default Yup;
