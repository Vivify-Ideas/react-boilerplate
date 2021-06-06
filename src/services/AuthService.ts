import { AxiosRequestConfig, AxiosResponse } from 'axios'
import jwtDecode from 'jwt-decode'
import { HTTP_METHODS, HTTP_STATUS_CODES } from '../constants'
import { getItem, removeItem, setItem } from '../utils/localStorage'
import httpService from './HttpService'

interface LoginResponse {
  access: string
  refresh: string
}

const ENDPOINTS = {
  LOGIN: '/api/v1/token/',
  ME: '/api/v1/users/me/',
  TOKEN_REFRESH: '/api/v1/token/refresh/',
  REGISTER: '/api/v1/users/',
  START_PASSWORD_RECOVERY: '/api/v1/password_reset/',
  VALIDATE_PASSWORD_RECOVERY_TOKEN: '/api/v1/password_reset/validate_token/',
  CONFIRM_PASSWORD_RECOVERY: '/api/v1/password_reset/confirm/'
}

class AuthService {
  httpService = httpService

  constructor() {
    this.init()
  }

  init = () => {
    this.setAccessToken(this.getAccessToken())
    this.httpService.addRequestInterceptor(this.checkTokenExpiration)
    this.httpService.addResponseInterceptors(
      this.handleSuccessResponse,
      this.handleErrorResponse
    )
  }

  getAccessToken = (): string => getItem('access_token')

  getRefreshToken = (): string => getItem('refresh_token')

  setAccessToken = (token: string) => {
    if (token) {
      setItem('access_token', token)

      this.httpService.attachHeaders({
        Authorization: `Bearer ${token}`
      })
    }
  }

  setRefreshToken = (token: string) => {
    if (!token) {
      return
    }
    setItem('refresh_token', token)
  }

  refreshToken = async (refreshToken: string) => {
    const { access: newAccessToken } = await this.httpService.request<{
      access: string
    }>({
      url: ENDPOINTS.TOKEN_REFRESH,
      method: HTTP_METHODS.POST,
      data: {
        refresh: refreshToken
      }
    })
    this.setAccessToken(newAccessToken)
    return newAccessToken
  }

  login = async (data: { email: string; password: string }) => {
    const loginData = await this.httpService.request<LoginResponse>({
      url: ENDPOINTS.LOGIN,
      method: HTTP_METHODS.POST,
      data: { ...data, username: data.email }
    })
    this.setAccessToken(loginData.access)
    this.setRefreshToken(loginData.refresh)
    return loginData
  }

  logout = async () => {
    this.destroySession()
  }

  fetchAuthenticatedUser = (): Promise<User> => {
    return this.httpService.request<User>({
      url: ENDPOINTS.ME,
      method: HTTP_METHODS.GET
    })
  }

  register = async (data: {
    first_name: string
    last_name: string
    email: string
    password: string
  }) => {
    const { accessToken: token } = await this.httpService.request({
      url: ENDPOINTS.REGISTER,
      method: HTTP_METHODS.POST,
      data
    })

    this.setAccessToken(token)

    return token
  }

  startPasswordRecovery = (data: { email: string }) =>
    this.httpService.request({
      url: ENDPOINTS.START_PASSWORD_RECOVERY,
      method: HTTP_METHODS.POST,
      data
    })

  validatePasswordRecoveryToken = (data: { token: string }) =>
    this.httpService.request({
      url: ENDPOINTS.VALIDATE_PASSWORD_RECOVERY_TOKEN,
      method: HTTP_METHODS.POST,
      data
    })

  confirmPasswordRecovery = (data: {
    password: string
    password_confirmation: string
    token: string
  }) =>
    this.httpService.request({
      url: ENDPOINTS.CONFIRM_PASSWORD_RECOVERY,
      method: HTTP_METHODS.POST,
      data
    })

  destroySession = () => {
    removeItem('access_token')
    removeItem('refresh_token')
    this.httpService.removeHeaders(['Authorization'])
  }

  checkTokenExpiration = async (request: AxiosRequestConfig) => {
    if (request.url === ENDPOINTS.TOKEN_REFRESH) {
      return request
    }

    const token = this.getAccessToken()

    if (
      token &&
      Date.now() / 1000 >= (jwtDecode(token) as { exp: number }).exp
    ) {
      const refreshToken = this.getRefreshToken()
      const newToken = await this.refreshToken(refreshToken)
      request.headers.Authorization = `Bearer ${newToken}`

      return request
    }

    return request
  }

  handleSuccessResponse = (response: AxiosResponse) => response

  handleErrorResponse = (error: { response: AxiosResponse }) => {
    try {
      const { status } = error.response

      /* eslint-disable default-case */
      switch (status) {
        case HTTP_STATUS_CODES.UNAUTHORIZED:
          this.destroySession()
          break
      }

      return Promise.reject(error)
    } catch (e) {
      return Promise.reject(error)
    }
  }
}

const authService = new AuthService()

export default authService
