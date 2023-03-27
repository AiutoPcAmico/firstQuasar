<template>
  <q-layout view="lHh LpR lFf">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Questo è la testa della pagina!🤯
        </q-toolbar-title>
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

          <q-item clickable v-ripple to="/page3" label="Page Three">
            <q-item-section avatar><q-icon name="send" /> </q-item-section>
            <q-item-section> NULL Page </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Questo è il piede della pagina! 🦶🏻</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
