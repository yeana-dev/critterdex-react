import axios from "axios";

const bugsUrl = "https://acnhapi.com/v1a/bugs";
const fishUrl = "https://acnhapi.com/v1a/fish";
const seaUrl = "https://acnhapi.com/v1a/sea";

export const getBug = async () => {
  try {
    const resp = await axios.get(bugsUrl);
    return resp.data;
  } catch (err) {
    throw err;
  }
};

export const getFish = async () => {
  try {
    const resp = await axios.get(fishUrl);
    return resp.data;
  } catch (err) {
    throw err;
  }
};

export const getSea = async () => {
  try {
    const resp = await axios.get(seaUrl);
    return resp.data;
  } catch (err) {
    throw err;
  }
};
