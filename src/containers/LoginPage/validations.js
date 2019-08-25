import Yup from 'utils/validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});
