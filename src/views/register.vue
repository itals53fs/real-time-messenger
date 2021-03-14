<template>
  <input type="text" v-model="name" @keyup.enter="enviar" />
</template>

<script>
export default {
    name: 'register',
  data() {
    return {
      name: "",
    };
  },
  methods: {
    enviar() {
      window.uid = this.name;
      router;
    },
  },
};
</script>

<style>
</style>