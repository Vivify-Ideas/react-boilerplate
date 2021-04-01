import Yup from 'utils/validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('global.validations.email')
    .required('global.validations.required'),
  password: Yup.string().required('global.validations.required'),
});
