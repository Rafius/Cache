export const fetchApi = ({
  url,
  method = "GET",
  headers = {
    "content-type": "application/json; carset=utf-8",
  },
  body,
}) => {
  return Promise.race([
    fetch(url, {
      body,
      headers,
      method,
    }).then((response) => response.json()),
  ]);
};

export default fetchApi;
