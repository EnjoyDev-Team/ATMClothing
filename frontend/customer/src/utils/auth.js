const { localStorage } = global.window;

const auth = {
  login(data) {
    const { user, isSuccess } = data;
    const { userName, _id } = user;

    localStorage.userName = userName;
    localStorage.userId = _id;
    localStorage.isSuccess = isSuccess;
    localStorage.role = user.role;
  },

  setAccessToken(token) {
    localStorage.accessToken = token;
  },

  getAccessToken() {
    return localStorage.accessToken;
  },

  role() {
    return localStorage.role;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
