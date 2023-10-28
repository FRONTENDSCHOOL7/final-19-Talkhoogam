const EmailValid = async (email) => {
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

    if (res.statue === 200) {
      const resJson = await res.json();
      return resJson.message;
    }
  } catch (error) {
    console.error(error);
    return "네트워크 오류가 발생했습니다";
  }
};

export default EmailValid;
