<template>
  <v-simple-table height="100%" class="lista">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Lista de Usuários</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.users">
          <td style="font-size: 18px; padding: 15px">
            <v-avatar color="blue" size="30" style="margin-right: 10px">{{
              item.users[0]
            }}</v-avatar
            >{{ item.users }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data() {
    return {
      verificar: true,
      name: "",
      desserts: Object,
    };
  },
  methods: {
    enviar() {
      window.uid = this.name || "anonimo";
      const ref = this.$firebase.database().ref("users");
      const id = ref.push().key;

      const data = {
        users: this.name,
      };
      ref.child(id).set(data, (err) => {
        if (err) {
          console.error(err);
        } else {
          this.verificar = false;
        }
      });
    },
    listar() {
      this.$http.get("users.json").then((resp) => {
        this.desserts = resp.data;
      });
    },
  },
  created() {
    setInterval(() => {
      this.listar();
    }, 1000);
  },
};
</script>

<style scoped>
.lista {
}

.lista input {
  border-radius: 10px;
  padding: 10px;
  outline: 0;
}
</style>