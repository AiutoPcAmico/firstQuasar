import { authApi } from "src/boot/axios";

export async function login({ commit, getters, dispatch }, payload) {
  try {
    const { username, password } = payload;
    const { data } = await authApi.post("auth", undefined, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });

    commit("setToken", data.token);
    commit("setDetails", data.user);
    return Promise.resolve(data.user);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}

export async function logout({ commit }) {
  commit("setToken", null);
  commit("setDetails", {});
}
