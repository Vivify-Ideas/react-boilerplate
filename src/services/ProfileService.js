import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  UPDATE_PROFILE: '/user',
  CHANGE_PASSWORD: '/user/change-password',
};

class AuthService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  updateProfile = (data) => {
    return this.httpService.request({
      url: ROUTES.UPDATE_PROFILE,
      method: HTTP_METHODS.POST,
      data,
    });
  };

  changePassword = (data) => {
    return this.httpService.request({
      url: ROUTES.CHANGE_PASSWORD,
      method: HTTP_METHODS.POST,
      data,
    });
  };
}

const authService = new AuthService(httpService);

export default authService;
