import axios from "axios";

export const fetchKonser = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/konser?_page=${pageParam}&_limit=8`
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    process.env.REACT_APP_BASE_ENDPOINT + `/product/${id}`
  );
  return data;
};

export const FetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`,
    input
  );
  return data;
};