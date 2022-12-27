export const validatePhone = ({ value }) => {
  const regex = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

  if (!regex.test(value)) {
    return 'Số điện thoại không hợp lệ!';
  }
  return '';
};

export const validatePassword = ({ value }) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!regex.test(value)) {
    return 'Password ít nhất 8 ký tự gồm số và chữ cái!';
  }

  return '';
};

export const validateOTP = ({ value }) => {
  if (value.length < 6) {
    return 'OTP ít nhất 6 ký tự';
  }

  return '';
};
