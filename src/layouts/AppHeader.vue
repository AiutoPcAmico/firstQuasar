<template>
  <q-header bordered class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Questo è la testa della pagina!🤯
      </q-toolbar-title>
      <LoginElement></LoginElement>
    </q-toolbar>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item clickable v-ripple to="/pageOne" label="Page One">
          <q-item-section avatar> <q-icon name="inbox" /> </q-item-section>
          <q-item-section> PageOne </q-item-section>
        </q-item>

        <q-item
          active
          clickable
          v-ripple
          to="/userList"
          label="Gestisci gli utenti"
        >
          <q-item-section avatar> <q-icon name="star" /> </q-item-section>
          <q-item-section> Aggiungi un utente </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/chatPage" label="Chat Page">
          <q-item-section avatar><q-icon name="send" /> </q-item-section>
          <q-item-section> Chat Page </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref, defineComponent } from "vue";
import LoginElement from "./LoginElement.vue";
export default defineComponent({
  name: "AppHeader",
  components: {
    LoginElement,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
