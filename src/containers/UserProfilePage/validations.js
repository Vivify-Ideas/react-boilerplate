import Yup from 'utils/validations';

export const updateUserSchema = Yup.object().shape({
  firstName: Yup.string().required('global.validations.required'),
  lastName: Yup.string().required('global.validations.required'),
});

export const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('global.validations.required'),
  newPassword: Yup.string().required('global.validations.required'),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'global.validations.one_of')
    .required('global.validations.required'),
});
