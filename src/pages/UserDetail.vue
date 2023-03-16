<template>
  <div>pippo</div>
  <p>{{ singleUser }}</p>
</template>

<script>
export default {
  data: function () {
    return {
      singleUser: undefined,
    };
  },
  methods: {
    async getUserDetails() {
      try {
        const { data } = await this.$api.get("users/" + this.$route.params.id);
        console.log(data);
        this.singleUser = data;
      } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dati");
        this.singleUser = undefined;
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>
