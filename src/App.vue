<template>
  <div id="app">

    <div class="site-header">
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/upload">Upload</router-link>
    </div>

    <router-view class="view-field"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }

  .site-header {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(34,34,34);
    z-index: 1000;
  }

  .view-field {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    z-index: 0;
  }

  .site-header a {
    float: left;
    height: 100%;
    position: relative;
    padding: 20px 15px;
    font-size: 16px;
    /*color: rgb(210,210,210);*/
    color: rgb(220,220,220);
  }

  /*.site-header a:first-child {*/
    /*font-size: 24px;*/
    /*padding: 15px;*/
  /*}*/

  .site-header a:last-child {
    float: right;
  }

  .site-header a:hover{
    color: white;
  }

  .site-header a:link{
    text-decoration: none;
  }

  .site-header i {
    padding: 0 10px;
  }
</style>
