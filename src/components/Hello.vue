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
        var formData = new FormData();
        // append string
        formData.append('foo', 'bar');

        this.$http.post("http://127.0.0.1:3000", formData).then( response => {
          // success callback
          console.log("File sent...");
          console.log(response);
        }, response => {
          // error callback
          console.log("Error occurred...");
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
