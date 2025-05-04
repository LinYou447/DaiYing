<style scoped>
.loginBody{
  width: 100%;
  height: 100%;
  background-image: url("../../image/LoginBackground.png");
  align-items: center;
  align-content: center;
}
.demo-login{
  width: 400px;
  margin: 0 auto !important;
}
.demo-auto-login{
  margin-bottom: 24px;
  text-align: left;
}
.demo-auto-login a{
  float: right;
}
</style>

<template>
  <div class="loginBody">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName style="margin-bottom: 15px" name="username" />
        <Password name="password" />
        <div class="demo-auto-login">
<!--          <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>-->
          <a style="margin-bottom: 15px">忘记密码</a>
        </div>
        <Submit @click="login" />
      </Login>
    </div>
  </div>
</template>

<script>
// import {Button} from "view-ui-plus";
// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  data () {
    return {
      autoLogin: true
    }
  },
  methods: {
    handleSubmit (valid, { username, password }) {
      if (valid) {
        this.$Modal.info({
          title: '输入的内容如下：',
          content: 'username: ' + username + ' | password: ' + password
        });
      }
    },
    login(){
      this.$router.push("/test")
    }
  }
}
</script>