import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions
} from 'react-query'
import { useNavigate } from 'react-router-dom'
import { HOME_PAGE } from '../constants'
import authService from '../services/AuthService'

const AUTH_USER_QUERY_KEY = 'authenticated_user'

export const useGetAuthenticatedUserQuery = (
  queryOptions: UseQueryOptions<User, string>
) =>
  useQuery<User, string>(
    AUTH_USER_QUERY_KEY,
    authService.fetchAuthenticatedUser,
    queryOptions
  )

export const useLoginMutation = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation(authService.login, {
    onSuccess: async () => {
      await queryClient.refetchQueries([AUTH_USER_QUERY_KEY])
      navigate(HOME_PAGE, { replace: true })
    }
  })
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()
  return useMutation(authService.register, {
    onSuccess: () => navigate(HOME_PAGE, { replace: true })
  })
}

export const useStartPasswordRecoveryMutation = () =>
  useMutation(authService.startPasswordRecovery)

export const useValidatePasswordRecoveryTokenMutation = () =>
  useMutation(authService.validatePasswordRecoveryToken)

export const useConfirmPasswordRecoveryMutation = () =>
  useMutation(authService.confirmPasswordRecovery)

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(authService.logout, {
    onSuccess: () => {
      queryClient.setQueryData(AUTH_USER_QUERY_KEY, null)
    }
  })
}
