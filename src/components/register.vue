<template>
  <div class="register">
    <label>Username: </label><input type="text" v-model="username" placeholder="User" class="no-outline">
    <label>Password: </label><input type="password" v-model="password" placeholder="Password" class="no-outline">
    <button @click="onRegister" class="primary">Register</button>
    <h4>{{tip}}</h4>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from "vuex"

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
      onRegister: function () {
        // 检测用户名或者密码是否为空
        if(!this.username || !this.password) {
          this.tip = "Username or password can't be empty!";
          return;
        }
        this.$http.post('/api/register', {
            username: this.username,
            password: this.password
        }).then(res => {
            console.log(res.data);
            switch(res.data) {
              // 注册成功
              case "succeed":
                  console.log("Register successful!");
                  localStorage.setItem('photoUser', JSON.stringify({username: this.username}));                  this.setUser(this.username);
                  this.changeLoginState(true);
                  this.$router.push('/');
                  break;
              // 用户名已经出现过
              case "conflict":
                  this.tip = "The username already exist!";
                  break;
              // 用户名或者密码为空，正常情况下应该在前端代码中就进行了筛查，这里以防万一
              case "empty":
                  console.log("Empty username or password!")
                  break;
              // 注册失败，保存至mongodb时出现错误
              case "failed":
                  console.log("Save failed!");
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
          console.log(res);
        })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    color: red;
  }
</style>
