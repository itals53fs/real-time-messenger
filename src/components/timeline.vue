<template>
  <v-timeline align-top class="timeline">
    <v-timeline-item v-for="(item, i) in items" :key="i">
      <v-card :color="color[3]" dark>
        <v-card-title class="title"> {{item.name}} </v-card-title>
        <v-card-text class="white text--primary">
          <p>
            {{item.messenger}}
          </p>
        </v-card-text>
        <small>{{item.created_at}}</small>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data: () => ({
    items: {},
    index: 0,
    color: [
      'red lighten-2',
      'purple darken-1',
      'green lighten-1',
      'indigo'
    ]
  }),
  created(){
    setInterval(()=>{
      this.index++
      if(this.index>3){
        this.index=0
      }
      this.listar()

    }, 1000)
  },
  methods:{
    listar() {
        this.$http.get("messenger.json").then((resp) => {
          this.items = resp.data;
        });
    },
  }
};
</script>
<style scoped>
.timeline {
  width: 90%;
  margin: 0 auto;
}
</style>