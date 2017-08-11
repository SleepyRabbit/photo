<template>
  <div class="register">
    <label>Username: </label><input type="text" v-model="username" placeholder="User" class="no-outline">
    <label>Password: </label><input type="password" v-model="password" placeholder="Password" class="no-outline">
    <button @click="onLogin" class="primary">Login</button>
    <h4>{{tip}}</h4>
  </div>
</template>

<script>

  import { mapActions } from "vuex"

export default {
  name: 'register',
  data () {
    return {
        username: "",
        password: "",
        tip: ""
    }
  },
  methods: {
      ...mapActions([
          "setUser",
          "changeLoginState",
      ]),
      onLogin: function () {
        // 检测用户名或者密码是否为空
        if(!this.username || !this.password) {
          this.tip = "Username or password can't be empty!";
          return;
        }
        this.$http.post('/api/login', {
            username: this.username,
            password: this.password
        }).then(res => {
//            console.log(res.data);
            switch(res.data) {
              // 登录成功
              case "succeed":
                console.log("Login successful!");
                sessionStorage.setItem('photoUser', JSON.stringify({username: this.username}));
                this.setUser(this.username);
                this.changeLoginState(true);
                this.$router.push('/');
                break;
              // 用户名已经出现过多次
              case "conflict":
                this.tip = "More than 2 username exist!";
                break;
              // 这个用户名没有出现
              case "not found":
                this.tip = "No user exist!";
                break;
              // 用户名或者密码为空，正常情况下应该在前端代码中就进行了筛查，这里以防万一
              case "empty":
                console.log("Empty username or password!")
                break;
              // 注册失败，保存至mongodb时出现错误
              case "failed":
                this.tip = "Wrong username or password!";
                break;
              // 在mongodb查询用户名时出现错误
              case "error":
                console.log("Error!");
                break;
              default:
                break;
            }
        }, res => {
          console.log("Post failed!");
//          console.log(res);
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    color: red;
  }
</style>
