<template>
  <div style="background-color:#282a36;">
    <div>
      <v-timeline align-top class="timeline">
        <div
          style="overflow: auto; max-height: 400px"
          data-js="el"
          class="scroll"
        >
          <v-timeline-item v-for="(item, i) in items" :key="i">
            <v-card :color="color[4]" dark class="card">
              <v-card-title class="title"> {{ item.name }} </v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  {{ item.messenger }}
                </p>
              </v-card-text>
              <small>{{ item.created_at }}</small>
            </v-card>
          </v-timeline-item>
        </div>
      </v-timeline>
    </div>
    <imput />
  </div>
</template>
<script>
import imput from "./imput.vue";
export default {
  components: { imput },
  data: () => ({
    items: {},
    color: ["red lighten-2", "purple darken-1", "green lighten-1", "indigo", '#7159c1'],
  }),
  created() {
    setInterval(() => {
      this.listar();
    }, 1000);


/*   setInterval(() => {
      var el = document.querySelector("[data-js='el']");
      this.height = el.scrollHeight;
      el.scrollTop = this.height;

    }, 10000); */
  },
  watch:{
    items(){
       var el = document.querySelector("[data-js='el']");
      this.height = el.scrollHeight;
      el.scrollTop = this.height;
    }
  },
  methods: {
    listar() {
      this.$http.get("messenger.json").then((resp) => {
        if(Object.keys(resp.data).length > Object.keys(this.items).length){
          this.items = resp.data;
        }
      });
    },
  },
};
</script>
<style scoped>
.timeline {
  width: 90%;
  margin: 0 auto;
  
}
.scroll::-webkit-scrollbar {
  width: 0px;
}
.title{
padding: 2px;
}
</style>