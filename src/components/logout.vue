<template>
  <div class="logout">

  </div>
</template>

<script>

  import { mapActions } from "vuex";

export default {
  name: 'logout',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      "setUser",
      "changeLoginState",
    ])
  },
  created: function () {
    this.$http.get('/api/logout').then( res => {
        console.log(res.data);
    }, res => {
        console.log("get failed!");
    });
    localStorage.removeItem('photoUser');
    this.setUser('');
    this.changeLoginState(false);
    this.$router.push('/');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home img {
    margin: 5px 10px;
    width: 150px;
    height: 250px;
  }
</style>
