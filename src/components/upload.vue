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

        this.$http.post("http://127.0.0.1:3002/upload", formData, {
          emulateJSON: true,
//          headers: {
////            'Content-Type': 'multipart/form-data',
//            'Access-Control-Allow-Origin' : '*'
//          }
        }).then( response => {
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
