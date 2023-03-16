<template>
  <div class="text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20px">Elenco degli utenti</div>
      <div class="q-pa-md">
        <q-table
          :rows="listUsers"
          :columns="columns"
          title="Utenti registrati"
          row-key="id"
          :loading="isLoading"
          rows-per-page-label="Righe per Pagina: "
          loading-label="Caricamento in corso..."
          no-data-label="nessun dato oppure si è verificato un errore"
          no-results-label="Mi spiace, non ho trovato risultati"
          :filter="filter"
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              label="Filtra..."
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>
        </q-table>
      </div>

      <q-btn
        class="q-mt-xl"
        color="green"
        text-color="white"
        to="/"
        label="Torna alla Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageOne",
  data: function () {
    return {
      listUsers: [],
      columns: [
        {
          name: "role",
          label: "Ruolo",
          field: "role",
          sortable: true,
        },
        {
          name: "name",
          label: "Nome",
          field: "name",
          sortable: true,
        },
        {
          name: "surname",
          label: "Cognome",
          field: "surname",
          sortable: true,
        },
        {
          name: "gender",
          label: "Genere",
          field: "gender",
          sortable: true,
          format: (val) => {
            if (val === "male") return "Uomo";
            else if (val === "female") return "Donna";
            else return "";
          },
        },
        {
          name: "businessName",
          label: "Azienda",
          field: "businessName",
          sortable: true,
        },
        {
          name: "userType",
          label: "Tipo Utenza",
          field: "userType",
          sortable: true,
        },
        {
          name: "email",
          label: "Indirizzo Email",
          field: "email",
          sortable: true,
        },
        {
          name: "isEnabled",
          label: "Stato",
          field: "isEnabled",
          sortable: true,
          format: (val) => {
            if (val) return "Attivo";
            else return "Disattivato;";
          },
        },
      ],
      isLoading: true,
      filter: ref(""),
    };
  },
  methods: {
    async getUsers() {
      try {
        const { data } = await this.$api.get("users", {
          params: {
            limit: 100,
          },
        });
        console.log(data);
        this.listUsers = data;
      } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dati");
        this.listUsers = [];
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.getUsers();
  },
});
</script>
