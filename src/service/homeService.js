import httpsRequest from "../utils/httpsRequest";

const getMoods = async () => {
  const data = await httpsRequest.get("/moods");
  return data.data.items;
};

// const qu

export default {
  getMoods,
};
