<style scoped>
.bioBody{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: whitesmoke;
  .bioBodyItem{
    width: 50%;
    height: 50%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 30px;
    position: relative;
  }
}
.buttonStyle{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
}
.ivu-upload{
  height: 150px;
}
</style>

<template>
  <div class="bioBody">
    <div class="bioBodyItem">
      <div v-if="!this.editValue" style="width: 100%;height: 40px">
        <Divider>注册账号</Divider>
      </div>
      <div v-else style="width: 100%;height: 40px">
        <Divider>修改账号信息</Divider>
      </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="username">
          <Input v-model="formValidate.username" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="电话" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入电话"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" type="password" password placeholder="请输入密码" />
        </FormItem>
        <FormItem>
          <div class="buttonStyle">
            <Button v-if="!this.editValue" style="width: 170px" type="primary" @click="handleSubmit('formValidate')">注 册</Button>
            <Button v-else style="width: 170px" type="primary" @click="handleSubmit('formValidate')">保 存</Button>
            <Button @click="login" style="margin-left: 8px;width: 170px">登 录</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import {Input} from "view-ui-plus";

export default {
  name:'BiographicalNote',
  components: {Input},
  props:{
    // isEdit:{
    //   type:Boolean
    // }
  },
  data(){
    return{
      value1: '110000',
      editValue:false,
      formValidate: {
        username: '',
        password: '',
        phone: '152035077334',
        mail: 'wojibuzhu447@163.com',
      },
      ruleValidate: {
        username: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '电话不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    // if (this.isEdit){
    //   this.editValue = this.isEdit
    // }else{this.editValue = false}
    // eslint-disable-next-line no-debugger
    debugger;
    if(this.$route.query.isEdit){
      this.editValue = this.$route.query.isEdit;
    }else{
      this.editValue = false;
    }
  },
  methods:{
    returnHome(){
      this.$router.push("/home")
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if(this.editValue){
            this.$Message.success('修改成功!');
            this.$router.push("/login")
          }else{
            this.$Message.success('注册成功!');
            this.$router.push("/login")
          }
        } else {
          this.$Message.error('注册失败!');
        }
      })
    },
    login () {
      this.$router.push("/login");
    }
  }
}
</script>