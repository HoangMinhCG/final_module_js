import httpsRequest from "../utils/httpsRequest";

const getAlbum = async () => {
  const data = await httpsRequest.get("/home/albums-for-you");
  //   return data.data.items;
  return data.data;
};
// getAlbum()
// const qu

export default {
  getAlbum,
};
