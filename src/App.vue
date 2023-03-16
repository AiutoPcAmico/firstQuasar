<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    fetchData() {
      this.$axios.get("users");
    },
  },
  name: "App",
});
</script>
