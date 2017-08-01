<template>
  <div class="register">
    <label>Username: </label><input type="text" v-model="username" placeholder="User">
    <label>Password: </label><input type="password" v-model="password" placeholder="Password">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
