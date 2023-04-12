<template>
  <q-page class="flex">
    <div
      class="col q-pa-md"
      style="background: lightgray; max-width: 30%; min-width: 30%"
    >
      <h5>Lista delle Chats</h5>
      <q-scroll-area style="height: 87vh">
        <div v-for="n in chats" :key="n" class="q-pa-xs">
          <b
            >{{ n.participants[0].user.name }}
            {{ n.participants[0].user.surname }}</b
          >
        </div>
      </q-scroll-area>
    </div>

    <div
      class="col-4 q-pa-md"
      style="background: lightcyan; min-width: 70%; max-width: 70%"
    >
      <div class="q-pa-xs">
        <h5>Chat con Pippo Pluto</h5>
      </div>
      <q-scroll-area
        style="height: 65vh; width: 90%; margin-left: 5%; padding: 4%"
      >
        <q-chat-message name="me" :text="['hey, how are you?']" sent />
        <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
        <div v-for="n in 100" :key="n" class="q-pa-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const onCreated = () => {
      store.dispatch("getListOfChats");
    };

    const chats = computed(() => {
      return store.getters.listOfChats;
    });

    onCreated();
    console.log(chats);
    return { chats };
  },
};
</script>
