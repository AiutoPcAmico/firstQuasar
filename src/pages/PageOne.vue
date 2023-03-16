<template>
  <div class="bg-red text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">200</div>

      <div class="text-h2" style="opacity: 0.4">Pagina uno!</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageOne",
});
</script>
