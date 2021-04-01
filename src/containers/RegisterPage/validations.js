import Yup from 'utils/validations';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('global.validations.required'),
  lastName: Yup.string().required('global.validations.required'),
  email: Yup.string()
    .email('global.validations.email')
    .required('global.validations.required'),
  password: Yup.string().required('global.validations.required'),
});
