import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PasswordRecoveryInitialStep from '../components/PasswordRecovery/PasswordRecoveryInitialStep'
import PasswordRecoveryLastStep from '../components/PasswordRecovery/PasswordRecoveryLastStep'
import { useValidatePasswordRecoveryTokenMutation } from '../queries/auth'

export default function PasswordRecoveryPage(): JSX.Element {
  const { search } = useLocation()
  const {
    mutate: validateToken,
    isLoading,
    isSuccess
  } = useValidatePasswordRecoveryTokenMutation()
  const [token, setToken] = useState<string>()
  useEffect(() => {
    const queryParams = new URLSearchParams(search)
    const tokenValue = queryParams.get('token')

    if (!tokenValue) {
      return
    }
    setToken(tokenValue)
    validateToken({ token: tokenValue })
  }, [search])

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    )
  }

  if (!token || !isSuccess) {
    return <PasswordRecoveryInitialStep />
  }

  return <PasswordRecoveryLastStep token={token} />
}
