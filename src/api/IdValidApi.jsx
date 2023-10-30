const IdValidApi = async (userId) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(url + "/user/accountnamevalid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          accountname: userId,
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

export default IdValidApi;
