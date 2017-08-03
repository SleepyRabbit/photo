<template>
  <div class="upload">
  <p>this is a test!</p>
    <!--<form action="" enctype="multipart/form-data">-->
      <input type="file" @change="onFileChange" accept="image/*">
      <button @click="uploadFile">Submit</button>
      <!--</form>-->

    <!--<form action="/api/upload" method="post" enctype="multipart/form-data">-->
      <!--<label>Please select photos to update: </label><input name="photo" type="file" multiple></input>-->
      <!--<input type="submit">-->
    <!--</form>-->
    <p>sss</p>

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
        this.filelist  = e.target.files || e.dataTransfer.files;
        if (!this.filelist.length)
          return;

        console.log("File change!");
      },
      uploadFile: function () {
        var formData = new FormData();
        let file = this.filelist[0];
        // append string
//        formData.type = "multipart/form-data"
        formData.append("file", file);
        formData.append('user', 'bar');

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
