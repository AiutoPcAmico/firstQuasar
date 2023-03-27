<template>
  <div class="row">
    <div class="col">
      <q-card square class="shadow-24" style="width: 300px; height: 750px">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">
            {{ isAnUpdate ? "Update User" : "Registration" }}
          </h4>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%)"
          >
            <q-btn fab icon="close" color="purple-4" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
            <q-input
              type="name"
              label="Your Name"
              v-model="formState.name"
              :rules="[
                (val) => (val && val.length > 0) || 'Name must be filled in.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person"></q-icon>
              </template>
            </q-input>

            <q-input
              type="surname"
              label="Your Surname"
              v-model="formState.surname"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Surname must be filled in.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person"></q-icon>
              </template>
            </q-input>

            <q-input
              square
              clearable
              v-model="formState.email"
              type="email"
              label="Email"
              :rules="[
                (val) => (val && val.length > 0) || 'Email must be filled in.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              v-if="!isAnUpdate"
              square
              clearable
              v-model="formState.password"
              type="password"
              label="Password"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Password must be filled in.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <q-input
              square
              clearable
              v-model="formState.telephone"
              type="telephone"
              label="Telephone"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>

            <q-input
              v-model="formState.description"
              label="Description"
              type="textarea"
            >
              <template v-slot:prepend>
                <span class="material-icons"> description </span>
              </template>
            </q-input>
          </q-form>
          {{ messageResultOperation.messageNewUser }}
          <q-btn
            unelevated
            size="lg"
            color="purple-4"
            class="full-width text-white"
            :label="!isAnUpdate ? 'Get Started!' : 'Update User'"
            @click="() => saveData()"
            :disable="!isSaveEnabled"
          />
        </q-card-section>
        <q-card-actions class="q-px-lg"> </q-card-actions>
      </q-card>
    </div>

    <div class="col">
      <q-card square class="shadow-24" style="width: 300px; height: 350px">
        <q-card-section class="bg-red">
          <h4 class="text-h5 text-white q-my-md">Delete</h4>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%)"
          ></div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
            <q-input
              type="id"
              label="User ID"
              v-model="idUser.id"
              :rules="[
                (val) =>
                  (val && val.length === 24) ||
                  'ID must be filled in and of 24 characters.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person"></q-icon>
              </template>
            </q-input>
            {{ messageResultOperation.messageDeletedUser }}
          </q-form>
          <q-btn
            unelevated
            size="lg"
            color="red"
            class="full-width text-white"
            label="Delete user!"
            @click="() => deleteUser()"
            :disable="!isDeleteEnabled"
          />
        </q-card-section>
        <q-card-actions class="q-px-lg"> </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const formState = ref({
      name: "",
      surname: "",
      email: "",
      role: "user",
      password: "",
      telephone: "",
      description: "",
    });

    const idUser = ref({
      id: undefined,
    });

    const messageResultOperation = ref({
      messageNewUser: "",
      messageDeletedUser: "",
    });

    return { formState, idUser, messageResultOperation };
  },

  methods: {
    async saveData() {
      try {
        if (this.isAnUpdate) {
          const result = await this.$api.put(
            "users/" + this.$route.params.id,
            this.formState
          );

          if (result.status === 200) {
            this.$router.push("/pageOne");
            this.messageResultOperation.messageNewUser = "User Updated!";
          }
        } else {
          await this.$api.post("users/", this.formState);
          this.$router.push("/pageOne");
          this.messageResultOperation.messageNewUser = "New user Added!";
        }
      } catch (error) {
        console.log(error);
        this.messageResultOperation.messageNewUser =
          error.response.data.message;
      }
    },

    async deleteUser() {
      try {
        await this.$api.delete("users/" + this.idUser.id);
        this.messageResultOperation.messageDeletedUser = "User deleted!";
        this.$router.push("/pageOne");
      } catch (error) {
        console.log(error);
        if (error.response.status === 404)
          this.messageResultOperation.messageDeletedUser = "User not existing!";
        else
          this.messageResultOperation.messageDeletedUser =
            "Unkwown error! Verify your internet connection!";
      }
    },

    async getUserDetails() {
      try {
        const { data } = await this.$api.get("users/" + this.$route.params.id);
        this.formState.name = data.name;
        this.formState.surname = data.surname;
        this.formState.email = data.email;
        this.formState.password = data.password;
        this.formState.role = data.role;
        this.formState.telephone = data.telephone;
        this.formState.description = data.description;

        this.idUser.id = this.$route.params.id;
      } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dati");
      }
      this.isLoading = false;
    },
  },

  computed: {
    isSaveEnabled() {
      if (
        !!this.formState.name &&
        !!this.formState.surname &&
        !!this.formState.email &&
        (!!this.formState.password || this.isAnUpdate)
      ) {
        return true;
      } else {
        return false;
      }
    },

    isDeleteEnabled() {
      if (this.idUser.id && this.idUser.id.length === 24) return true;
      else return false;
    },

    isAnUpdate() {
      return !!this.$route.params.id;
    },
  },

  created() {
    if (this.$route.params.id) {
      this.getUserDetails();
    }
  },
};
</script>
