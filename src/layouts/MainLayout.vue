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

      <q-tabs align="left">
        <q-route-tab to="/pageOne" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- drawer content -->
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat
      sollicitudin varius. Nunc convallis tortor in accumsan viverra.
      Suspendisse ornare mauris non lobortis sagittis. Integer magna est,
      commodo sed tristique eu, mollis quis ipsum. Pellentesque aliquet egestas
      sollicitudin. Sed sit amet velit eget ante volutpat accumsan tempor ornare
      mi. Aliquam aliquam dui eu purus aliquet, id luctus neque sodales. Integer
      ac lectus erat. Etiam in aliquam neque. Sed eleifend eu eros non
      fringilla. Donec hendrerit rutrum felis. Sed luctus tortor leo. Aenean
      eget nisi eros. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Nulla nec mi consectetur, elementum arcu
      vulputate, auctor ipsum. Aenean feugiat odio vel dui laoreet efficitur.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec
      porttitor risus. Praesent pretium aliquam risus, a faucibus ligula
      fringilla sit amet. Curabitur congue urna sed magna elementum finibus. Nam
      imperdiet rutrum ligula, at egestas sem pellentesque eu. Curabitur rhoncus
      erat nec pellentesque fermentum. Praesent eget massa sem. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
