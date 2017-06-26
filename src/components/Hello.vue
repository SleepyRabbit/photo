<template>
  <div class="hello">
  <p>this is a test!</p>
    <button @click="uploadFile">upload</button>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods: {
      uploadFile: function () {
        let form = new FormData();
        form.append('photo',"./Hello.vue", "Hello.vue" );
        this.$http.post("127.0.0.1:8080", form, {

        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
