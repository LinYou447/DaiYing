<style>
.bioBody{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding-top: 30px;
  //padding-bottom: 20px;
  //background:rgba(0,0,0,0.5);
  .bioBodyItem{
    width: 55%;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
  }
}
.buttonStyle{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.ivu-upload{
  height: 150px;
}
</style>

<template>
  <div class="bioBody">
    <div class="bioBodyItem">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>
          <Col span="18">
            <FormItem label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="性别" prop="sex">
              <RadioGroup v-model="formValidate.sex">
                <Radio label="1">男</Radio>
                <Radio label="0">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="邮箱" prop="email">
              <Input v-model="formValidate.email" placeholder="请输入邮箱"></Input>
            </FormItem>
          </Col>
          <Col span="2"></Col>
          <Col span="4">
            <div style="width: 100%;height: 20px">
              <Upload
                  multiple
                  type="drag"
                  style="height: 200px;"
                  action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                  <Icon type="md-add" size="52" style="color: #3399ff"></Icon>
                  <p>上传照片</p>
                </div>
              </Upload>
            </div>
          </Col>
        </Row>

        <FormItem label="所在城市" prop="city">
          <City use-name v-model="formValidate.city" />
        </FormItem>
        <FormItem label="籍贯" prop="nativePlace">
          <Input v-model="formValidate.nativePlace" placeholder="请输入籍贯"></Input>
        </FormItem>
        <FormItem label="电话" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入电话"></Input>
        </FormItem>
        <FormItem label="学历" prop="edu">
          <RadioGroup v-model="formValidate.edu">
            <Radio label="zhuanke">专科</Radio>
            <Radio label="benke">本科</Radio>
            <Radio label="shuoshi">硕士</Radio>
            <Radio label="boshi">博士</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="专业" prop="major">
          <Input v-model="formValidate.major" placeholder="请输入专业"></Input>
        </FormItem>
        <FormItem label="教育背景" prop="eduBack">
          <Input v-model="formValidate.eduBack" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="实习经历" prop="internshipExperience">
          <Input v-model="formValidate.internshipExperience" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="证书技能" prop="certificateSkills">
          <Input v-model="formValidate.certificateSkills" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="自我评价" prop="selfEvaluation">
          <Input v-model="formValidate.selfEvaluation" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem>
          <div class="buttonStyle">
            <Button style="width: 170px" type="primary" @click="handleSubmit('formValidate')">保存</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px;width: 170px">重置</Button>
            <Button @click="returnHome" style="margin-left: 8px;width: 170px">回到首页</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import {Input} from "view-ui-plus";
import axios from "axios";
import {inject} from 'vue'

export default {
  name:'BiographicalNote',
  components: {Input},
  data(){
    return{
      value1: '110000',
      tokenFix: '',
      formValidate: {
        id:'',
        name: '刘德华',
        nativePlace: '湖北省孝感市',
        phone: '152035077334',
        edu: 'benke',
        major: '软件工程',
        email: 'wojibuzhu447@163.com',
        city: '',
        sex: '1',
        interest: [],
        date: '',
        time: '',
        eduBack: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        internshipExperience: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        certificateSkills: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        selfEvaluation: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        nativePlace: [
          { required: true, message: '籍贯不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '联系电话不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        eduBack: [
          { required: true, message: '请填写教育背景', trigger: 'blur' },
          { type: 'string', min: 1, message: '教育背景不能为空', trigger: 'blur' }
        ],
        internshipExperience: [
          { required: true, message: '请填写校园经历', trigger: 'blur' },
          { type: 'string', min: 1, message: '校园经历不能为空', trigger: 'blur' }
        ],
        certificateSkills: [
          { required: true, message: '请填写证书技能', trigger: 'blur' },
          { type: 'string', min: 1, message: '证书技能不能为空', trigger: 'blur' }
        ],
        selfEvaluation: [
          { required: true, message: '请填写自我评价', trigger: 'blur' },
          { type: 'string', min: 1, message: '自我评价不能为空', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    this.getBiographical();
  },
  methods:{
    getBiographical(){
      axios.get(this.$apiBaseUrl+'/api/biographical/getByUserId?userId='+sessionStorage.getItem("userId"),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          // this.$Message.success(res.data.message);
          this.formValidate = res.data.data;
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    returnHome(){
      this.$router.push("/home")
      this.tokenFix = inject('tokenFix');
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.formValidate.userId = sessionStorage.getItem("userId");
          axios.post(this.$apiBaseUrl+'/api/biographical/create',this.formValidate,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
                }
              }).then(res=>{
            if(res.data.code===200){
              this.$Message.success(res.data.message);
              // this.formValidate = res.data.data;
            }else{
              this.$Message.error(res.data.message);
            }
          })
        }
      })
    },
    handleReset (name) {
      this.formValidate={
        name: '',
            nativePlace: '',
            phone: '',
            edu: '',
            major: '',
            email: '',
            city: '',
            sex: '',
            interest: [],
            date: '',
            time: '',
            eduBack: '',
            internshipExperience: '',
            certificateSkills: '',
            selfEvaluation: '',
      };
      this.$refs[name].resetFields();
    }
  }
}
</script>