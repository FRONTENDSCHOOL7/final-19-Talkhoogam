const EditProfileApi = async (token, username, userId, intro, image) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(url + "/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          accountname: userId,
          intro: intro,
          image: image,
        },
      }),
    });

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default EditProfileApi;
