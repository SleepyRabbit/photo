<template>
  <div class="upload">
  <p>this is a test!</p>
    <!--<button @click="uploadFile">upload</button>-->
      <input type="file" @change="onFileChange($event)" accept="image/*">
  </div>
</template>

<script>

export default {
  name: 'upload',
  data () {
    return {
      filelength: 0,
      filelist: null
    }
  },
  methods: {
      onFileChange: function (e) {
        this.filelist = e.target.files;
        console.log("File change!");
//        console.log(this.filelist[0]);
        this.uploadFile();
      },
      uploadFile: function () {
        var formData = new FormData();
        // append string
//        formData.type = "multipart/form-data"
//        formData.append('foo', 'bar');
        formData.append("image", this.filelist[0])

        this.$http.post("/api/upload", formData)
          .then( res => {
          // success callback
          console.log("File sent...");
          console.log(res.data);
        }, res => {
          // error callback
          console.log("Error occurred...");
          console.log(res);
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
