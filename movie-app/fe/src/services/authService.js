import BaseServices from "./baseService.js";

class AuthService extends BaseServices {
  login = (data) => {
    return this.http.post("auth/login", data);
  };
  register = (data) => {
    return this.http.post("auth/register", data);
  };
  getMe = () => {
    return this.http.get("auth/me");
  };
}

export default AuthService;
