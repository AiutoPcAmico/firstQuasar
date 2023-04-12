import { api } from "src/boot/axios";

export async function getListOfChats({ commit, getters, dispatch }, payload) {
  try {
    const { data } = await api.get("chats");

    console.log({ data });
    commit("setListOfChats", data);
    return Promise.resolve(data);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}

export async function getSingleDetails({ commit, getters, dispatch }, payload) {
  try {
    const currentChatId = payload.id.value;
    const { data } = await api.get(`chatmessages/${currentChatId}/messages`, {
      params: {
        sort: "timestamp",
      },
    });

    console.log({ data });
    commit("setChatMessages", data.messages);
    return Promise.resolve(data.messages);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}
