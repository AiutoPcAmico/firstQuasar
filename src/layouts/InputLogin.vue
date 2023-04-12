<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="padding: 15px">
      <h6>Do Login!</h6>
      <q-input v-model="username" label="Username" />
      <q-input v-model="password" label="Password" type="password" />

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
        <q-btn
          color="primary"
          label="OK"
          @click="onOKClick"
          :disable="!isLoginEnabled"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useStore } from "vuex";

export default {
  props: {
    // ...your custom props
  },

  computed: {
    isLoginEnabled() {
      if (this.username !== "" && this.password !== "") return true;
      else return false;
    },
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    "ok",
    "hide",
  ],
  methods: {},

  setup() {
    const username = ref("");
    const password = ref("");
    const store = useStore();

    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      async onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        console.log(username.value);
        await store.dispatch("login", {
          username: username.value,
          password: password.value,
        });

        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,

      username,
      password,
    };
  },
};
</script>
