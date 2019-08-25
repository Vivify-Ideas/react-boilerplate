import Yup from 'utils/validations';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
});
