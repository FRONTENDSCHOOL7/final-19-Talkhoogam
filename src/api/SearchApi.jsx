const SearchApi = async (token, userId) => {
  const url = "https://api.mandarin.weniv.co.kr";

  try {
    const res = await fetch(`${url}/user/searchuser/?keyword=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default SearchApi;
