import axios from "axios";
import { reactive } from "@vue/reactivity";
import { toRefs } from "@vue/runtime-core";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchConfig(config) {
  if (typeof config === "string") {
    return {
      url: config,
    };
  }
  return config;
}

export default function (config, options = {}) {
  const state = reactive({
    response: {
      data: "",
      status: "",
      headers: {},
    },
    error: null,
    fetching: false,
  });
  //config = fetchConfig(config);
  state.fetching = true;
  console.log("useAxios");
  instance
    .get(config, options)
    .then((response) => {
      state.response.data = response.data;
      state.response.headers = response.headers;
      state.response.status = response.status;
    })
    .catch((error) => {
      state.error = error;
    })
    .finally(() => {
      state.fetching = false;
    });
  return { ...toRefs(state) };
}
