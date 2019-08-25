import Yup from 'utils/validations';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});
