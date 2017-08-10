<template>
  <div class="home">
    <div v-if="getLoginState">
      <h2>Hello <i>{{getUser}}</i>!Welcome to the photo world!</h2>
      <div v-for="list in imgList">
        <img :src="list" alt="">
      </div>
      <!--<img src="http://127.0.0.1:3006/22/WechatIMG1.jpeg" alt="">-->
    </div>
    <div v-else>
      <h2>Please login first!</h2>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";

export default {
  name: 'home',
  data () {
    return {
        imgList: [],
    }
  },
  methods: {
    updateImg: function () {
      let user = this.getUser;
      console.log(user);
      this.$http.post('/api/photo', {
          username: user
      }).then(res => {
//        console.log(res.data)
        this.imgList = res.data;
      }, res => {
        console.log("Post failed!");
        console.log(res.data);
      });
    }
  },
  computed: {
    ...mapGetters([
        "getUser",
        "getLoginState",
    ])
  },
  created: function () {
    this.updateImg();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home img {
    width: 300px;
    height: 400px;
  }
</style>
