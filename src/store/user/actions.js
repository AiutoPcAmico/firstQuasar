export async function login({ commit, getters, dispatch }, payload) {
  try {
    const { email, password } = payload;
    try {
      const { data } = await api.post("auth", undefined, {
        Headers: {
          Authorization: "Basic " + (email + ":" + password).toString("base64"),
        },
      });

      commit("setToken", data.token);
      commit("setUser", data.user);
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
