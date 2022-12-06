const { localStorage } = global.window;

const auth = {
  login(data) {
<<<<<<< HEAD
    localStorage.name = data.data.user.name;
    localStorage.email = data.data.user.email;
    localStorage.gender = data.data.user.gender;
    localStorage.dob = data.data.user.dob;
    localStorage.phone = data.data.user.phone;
    localStorage.role = data.data.user.role;
    localStorage._id = data.data.user._id;
    localStorage.avatar = data.data.user.photo;
=======
    localStorage.phone = data.data.user.phone;
    localStorage.role = data.data.user.role;
    localStorage._id = data.data.user._id;
>>>>>>> b16604d (update after pull)
    localStorage.accessToken = data.access_token;
  },

  setAccessToken(token) {
    localStorage.accessToken = token;
  },

  getAccessToken() {
    return localStorage.accessToken;
  },

  getID() {
    return localStorage._id;
  },

  getPhone() {
    return localStorage.phone;
  },

  role() {
    return localStorage.role;
  },

  getInfo() {
    return {
      name: localStorage.name || '',
      gender: localStorage.gender || '',
      dob: localStorage.dob || '',
      phone: `${localStorage.phone.substring(0, 2)}*****${localStorage.phone.substring(
        localStorage.phone.length - 3,
        localStorage.phone.length
      )}`,
      email: localStorage.email || '',
    };
  },

  getAvatar() {
    return !localStorage.avatar || localStorage.avatar === 'undefined' || localStorage.avatar === 'null'
      ? ''
      : localStorage.avatar;
  },

  updateAvatar(avt) {
    localStorage.avatar = avt;
  },

  updateInfo(userInfo) {
    localStorage.name = userInfo.name;
    localStorage.gender = userInfo.gender;
    localStorage.dob = userInfo.dob;
    localStorage.email = userInfo.email;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
