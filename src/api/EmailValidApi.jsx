const EmailValidApi = async (email) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(url + "/user/emailvalid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
        },
      }),
    });

    const resJson = await res.json();
    return resJson.message;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default EmailValidApi;
