const SearchApi = async (title) => {
  const url = "https://dapi.kakao.com/v3/search/book";
  const key = "981f45ece153d58d49b27ae805f3b89f";

  try {
    const res = await fetch(`${url}?query=${title}`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${key}`,
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
