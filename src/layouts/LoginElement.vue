<template>
  <q-btn
    color="blue"
    icon="lock"
    label="Login"
    @click="() => promptDataForLogin()"
  />
</template>

<script>
import { useQuasar } from "quasar";
import InputLogin from "./InputLogin.vue";

export default {
  name: "LoginElement",
  setup() {
    const $q = useQuasar();

    function promptDataForLogin() {
      $q.dialog({
        component: InputLogin,
      });
    }
    return { promptDataForLogin };
  },
};
</script>
