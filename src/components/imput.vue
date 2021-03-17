<template>
  <div class="card">
    <div fluid class="fluid">
      <textarea autocomplete="text" class="messenger" v-model="messenger"></textarea>
    </div>
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
  height: 96px;
  border-radius: 20px 0 0 20px;
  padding: 20px;
  width: 100%;
  margin: 0 0 5px 10px;
  outline: 0;

}
.card {
  background-color: #ccc;
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #282a36;
}
.fluid {
  width: 90%;
  flex-direction: column;
  display: flex;
  justify-content: center;
}
button {
  margin: 2px 0 2px 0;
  font-size: 50px;
  margin: 0 10px 5px 0;
  border: none;
  outline: 0;
  background-color: #fff;
  border-radius:0 20px 20px 0;
  background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>