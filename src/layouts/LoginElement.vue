<template>
  <q-btn
    color="blue"
    icon="lock"
    label="Login"
    @click="() => promptDataForLogin()"
    v-if="!isLogged"
  />

  <q-btn
    color="blue"
    icon="lock"
    label="Logout"
    @click="() => logoutButton()"
    v-if="isLogged"
  />
</template>

<script>
import { useQuasar } from "quasar";
import InputLogin from "./InputLogin.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { logout } from "./../store/user/actions";

export default {
  name: "LoginElement",

  setup() {
    const $q = useQuasar();
    const store = useStore();

    const isLogged = computed(() => {
      return !!store.getters.token;
    });

    function promptDataForLogin() {
      $q.dialog({
        component: InputLogin,
      });
    }

    async function logoutButton() {
      await store.dispatch("logout");
    }
    return { promptDataForLogin, isLogged, logoutButton };
  },
};
</script>
