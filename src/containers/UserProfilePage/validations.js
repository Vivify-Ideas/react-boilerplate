import Yup from 'utils/validations';

export const updateUserSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required()
});

export const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required(),
  newPassword: Yup.string().required(),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null])
    .required()
});
