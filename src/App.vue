<template>
  <v-app id="inspire">
    <v-app-bar app color="#50fa7b" flat>
      <v-container class="py-0 fill-height">
        <div>Chat dos Sacolas</div>
        <v-spacer></v-spacer>

        <v-responsive max-width="100">
          <v-text-field
          v-if="verificar"
            dense
            flat
            hide-details
            rounded
            solo-inverted
            @keyup.enter="fun"
            v-model="name"
            placeholder="nome..."
            background-color="#7159c1"
          ></v-text-field>
          <v-avatar v-else color="blue" size="30" style="margin-right: 10px">{{
              name[0]
            }}</v-avatar> <span v-if="!verificar">{{name}}</span> 
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
<!--           <v-col class="lista">
            <v-sheet rounded="lg">
              <lista-users />
            </v-sheet>
          </v-col> -->

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <home />
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
        </v-row>
      </v-container>
      <lista-users/>
    </v-main>
  </v-app>
</template>

<script>
import listaUsers from "./components/listaUsers.vue";
import Home from "./views/Home.vue";
export default {
  components: { listaUsers, Home},
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    name: '',
    verificar: true
  }),
  methods:{
    fun(){
      window.uid = this.name || "anonimo";
      const ref = this.$firebase.database().ref("users");
      const id = ref.push().key;

      const data = {
        users: this.name,
      };
      ref.child(id).set(data, (err) => {
        if (err) {
          console.error(err);
        }else{
          this.verificar= false
        }
      });
    },
  }
};
</script>

<style scoped>
</style>
