import Yup from 'utils/validations';

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required(),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'global.validations.one_of')
    .required('global.validations.required'),
});
