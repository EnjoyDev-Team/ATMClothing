const convert2base64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onerror = (err) => {
    reject(err);
  };
});

export default convert2base64;
