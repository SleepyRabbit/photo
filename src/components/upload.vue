<template>
  <div class="upload">
  <p>Please select the photos you want to upload!</p>
  <input type="file" @change="onFileChange" accept="image/*" multiple>
  <button @click="uploadFile">Submit</button>
  <h4>{{ tip }}</h4>
  </div>
</template>

<script>

export default {
  name: 'upload',
  data () {
    return {
      filelength: 0,
      filelist: [],
      tip: "",
    }
  },
  methods: {
      onFileChange: function (e) {
        this.filelist  = e.target.files || e.dataTransfer.files;
        console.log("File change!");
        this.tip = "";
      },
      uploadFile: function () {
        let file_num = this.filelist.length;
        // 检查用户是否选择了文件
        if (!file_num) {
            this.tip = "No file selected!";
            return;
        }

        // 构造formdata用于文件传输
        let formData = new FormData();

        for(let i = 0; i < file_num; i++) {
          formData.append("file", this.filelist[i]);
        }
////        formData.type = "multipart/form-data"
////        formData.append("file", file);
        formData.append('user', 'bar');
//
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
