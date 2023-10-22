const JoinApi = async (username, email, password) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(url + "/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user": {
          "username": username,
          "email": email,
          "password": String,
          "accountname": String,
          "intro": String,
          "image": String,
        },
      }),
    });

    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return error;
  }
};

export default JoinApi;
