import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions
} from 'react-query'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  return useMutation(authService.login, {
    onSuccess: async () => {
      await queryClient.refetchQueries([AUTH_USER_QUERY_KEY])
      history.replace(HOME_PAGE)
    }
  })
}

export const useRegisterMutation = () => {
  const history = useHistory()
  return useMutation(authService.register, {
    onSuccess: () => history.replace(HOME_PAGE)
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
