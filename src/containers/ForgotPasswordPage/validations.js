import Yup from 'utils/validations';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('global.validations.email')
    .required('global.validations.required'),
});
