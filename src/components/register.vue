<template>
  <div class="register">
    <label>Username: </label><input type="text" v-model="username" placeholder="User">
    <label>Password: </label><input type="password" v-model="password" placeholder="Password">
    <button @click="onRegister">Register</button>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
        username: "",
        password: ""
    }
  },
  methods: {
      onRegister: function () {
        this.$http.post('/api/register', {
            username: this.username,
            password: this.password
        }).then(res => {
            console.log("Successful!");
            this.$router.push('/');
        }, res => {
          console.log("Failed!");
          console.log(res);
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
