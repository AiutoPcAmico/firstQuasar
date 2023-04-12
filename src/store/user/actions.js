export async function login({ commit, getters, dispatch }, payload) {
  try {
    const { email, password } = payload;
    const { data } = await api.post("auth", undefined, {
      Headers: {
        Authorization: "Basic " + (email + ":" + password).toString("base64"),
      },
    });

    commit("setToken", data.token);
    commit("setUser", data.user);
    return Promise.resolve(data.user);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}
