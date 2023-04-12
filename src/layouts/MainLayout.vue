<template>
  <q-layout view="lHh LpR lFf">
    <app-header></app-header>
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
import AppHeader from "./AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
