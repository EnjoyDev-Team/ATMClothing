const { localStorage } = global.window;

const auth = {
  login(data) {
    localStorage.phone = data.data.user.phone;
    localStorage.role = data.data.user.role;
    localStorage._id = data.data.user._id;
    localStorage.accessToken = data.access_token;
  },

  setAccessToken(token) {
    localStorage.accessToken = token;
  },

  getAccessToken() {
    return localStorage.accessToken;
  },

  getPhone() {
    return localStorage.phone;
  },

  role() {
    return localStorage.role;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
