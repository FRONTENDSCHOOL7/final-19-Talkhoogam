const LoginApi = async (email, password) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(url + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user": {
          "email": email,
          "password": password,
        },
      }),
    });

    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return error;
  }
};

export default LoginApi;
