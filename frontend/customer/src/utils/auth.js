const { localStorage } = global.window;

const auth = {
  login(data) {
    localStorage.phone = data.data.user.phone;
    localStorage.role = data.data.user.role;
    localStorage._id = data.data.user._id;
    localStorage.avatar = data.data.user.photo;
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

  getId() {
    return localStorage._id;
  },

  role() {
    return localStorage.role;
  },

  getAvatar() {
    return localStorage.avatar;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
