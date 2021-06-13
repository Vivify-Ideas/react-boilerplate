import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { config } from './../config'

export class HttpService {
  httpClient: AxiosInstance
  unauthorizedCallback?: () => void

  constructor() {
    this.httpClient = axios.create({
      baseURL: config.API_BASE_URL as string
    })
  }

  request = <T, R = T>(requestConfig: AxiosRequestConfig): Promise<R> =>
    this.httpClient.request(requestConfig).then(({ data }) => data)

  attachHeaders = (headers: { [key: string]: string }) =>
    Object.assign(this.httpClient.defaults.headers, headers)

  removeHeaders = (headerKeys: string[]) =>
    headerKeys.forEach(
      (key: string | number) => delete this.httpClient.defaults.headers[key]
    )

  setUnauthorizedCallback = (callback: () => void) =>
    (this.unauthorizedCallback = callback)

  addRequestInterceptor = (
    callback:
      | ((
          value: AxiosRequestConfig
        ) => AxiosRequestConfig | Promise<AxiosRequestConfig>)
      | undefined
  ) => this.httpClient.interceptors.request.use(callback)

  removeRequestInterceptor = (interceptorId: number) =>
    this.httpClient.interceptors.request.eject(interceptorId)

  addResponseInterceptors = (
    successCallback:
      | ((
          value: AxiosResponse<unknown>
        ) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>)
      | undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorCallback: ((error: any) => any) | undefined
  ) => this.httpClient.interceptors.response.use(successCallback, errorCallback)

  removeResponseInterceptors = (interceptorId: number) =>
    this.httpClient.interceptors.response.eject(interceptorId)
}

const httpService = new HttpService()

export default httpService
