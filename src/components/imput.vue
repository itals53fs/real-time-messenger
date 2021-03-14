<template>
  <div class="card">
    <v-container fluid class="fluid">
      <v-textarea autocomplete="text" class="messenger" v-model="messenger" @keyup.enter="enviar"></v-textarea>
    </v-container>
    <button @click="enviar">➣</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messenger: '',
      mes: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "agosto",
        "outubro",
        "novembro",
        "dezembro",
      ],
    };
  },
  methods: {
    async enviar() {
      const Data = new Date();
      const criacao = `${Data.getDate()} de ${
        this.mes[Data.getMonth()]
      } de ${Data.getFullYear()} ${Data.getHours()}: ${Data.getMinutes()}`;

      const ref = this.$firebase.database().ref("messenger");
      const id = ref.push().key;
      /*       if (this.img) {
        const file = await this.$firebase
          .storage()
          .ref("noticias")
          .child(id)
          .put(this.img);
        url = await file.ref.getDownloadURL();
      } */

      const data = {
        messenger: this.messenger,
        name: window.uid || 'anonimo',
        created_at: criacao,
      };

      ref.child(id).set(data, (err) => {
        if (err) {
          console.error(err);
        } else {
          this.messenger = ''
        }
      });
      /*this.$http
        .post(ref, { img: this.img, text: this.txt })
        .then(() => {});*/
    },
  },
};
</script>


<style scoped>
.messenger {
  background-color: #fff;
  height: 200px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 20px;
}
.card {
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
}
.fluid {
  width: 90%;
}
button {
  font-size: 50px;
  margin-right: 20px;
  border: none;
  outline: 0;
}
</style>