class DataLogin {
  static async checkLogin(formdata) {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace('#/home');
        alert(data.message);
        return data;
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataLogin;
