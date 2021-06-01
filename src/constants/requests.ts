import { Method } from 'axios'

export const HTTP_STATUS_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  VALIDATION_FAILED: 422
}

export const HTTP_METHODS: { [key: string]: Method } = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}
