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
      <Form ref="formValidate" :model="formValidate" :label-width="80">
        <Row>
          <Col span="18">
            <FormItem label="姓名">
              <Input disabled v-model="formValidate.name"></Input>
            </FormItem>
            <FormItem label="性别" >
              <RadioGroup v-model="formValidate.sex">
                <Radio disabled label="1">男</Radio>
                <Radio disabled label="0">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="邮箱" disabled>
              <Input disabled v-model="formValidate.email" ></Input>
            </FormItem>
          </Col>
          <Col span="2"></Col>
          <Col span="4">
<!--            <div style="width: 100%;height: 150px;border: solid 1px black">-->

<!--            </div>-->
            <Upload
                ref="upload"
                disabled
                :format="['jpg','jpeg','png']"
                :max-size="10240"
                :show-upload-list="false"
                type="drag"
                style="display: inline-block; width: 150px;">
              <div style="width: 150px; height: 150px; line-height: 150px;">
                <img v-if="avatarUrl" :src="avatarUrl" style="width: 100%; height: 100%; object-fit: cover;">
                <Icon v-else type="ios-camera" size="40"></Icon>
              </div>
            </Upload>
          </Col>
        </Row>
        <FormItem label="所在城市" prop="city">
          <City use-name disabled v-model="formValidate.city" />
        </FormItem>
        <FormItem label="籍贯">
          <Input disabled v-model="formValidate.nativePlace" ></Input>
        </FormItem>
        <FormItem label="电话">
          <Input disabled v-model="formValidate.phone" ></Input>
        </FormItem>
        <FormItem label="学历">
          <RadioGroup v-model="formValidate.edu">
            <Radio disabled label="zhuanke">专科</Radio>
            <Radio disabled label="benke">本科</Radio>
            <Radio disabled label="shuoshi">硕士</Radio>
            <Radio disabled label="boshi">博士</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="专业">
          <Input disabled v-model="formValidate.major"></Input>
        </FormItem>
        <FormItem label="教育背景">
          <Input disabled v-model="formValidate.eduBack" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="实习经历">
          <Input disabled v-model="formValidate.internshipExperience" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="证书技能">
          <Input disabled v-model="formValidate.certificateSkills" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="自我评价">
          <Input disabled v-model="formValidate.selfEvaluation" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem>
          <div class="buttonStyle">
            <Button style="width: 170px" type="primary" @click="create">提交申请</Button>
            <Button @click="returnHome" style="margin-left: 8px;width: 170px">取消</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import {Input} from "view-ui-plus";
import axios from "axios";
import {inject} from "vue";

export default {
  name:'BiographicalNote',
  components: {Input},
  data(){
    return{
      value1: '110000',
      tokenFix:'',
      avatarUrl:'',
      positionId:'',
      companyId:'',
      biographicalId:'',
      formValidate: {
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
      }
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    this.getInfo();
    this.positionId = this.$route.query.positionId;
    this.companyId = this.$route.query.companyId;
  },
  methods:{
    getImage(){
      axios.get(this.$apiBaseUrl+'/api/images/priviewImg/'+this.formValidate.imageId,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          // this.$Message.success(res.data.message);
          this.avatarUrl = res.data.data.url;
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    getInfo(){
      axios.get(this.$apiBaseUrl+'/api/biographical/getByUserId?userId='+sessionStorage.getItem("userId"),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          this.formValidate = res.data.data;
          this.biographicalId = res.data.data.id;
          this.getImage();
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    returnHome(){
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push('/home'); // 跳转到默认页
      }
    },
    create(){
      var req={
        biographicalId:this.formValidate.id,
        positionId:this.positionId,
        companyId:this.companyId,
        userId:sessionStorage.getItem("userId")
      }
      axios.post(this.$apiBaseUrl+'/api/positionRequest/createPositionRequest',req,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          alert(1111)
          this.$Message.success('投递成功,2秒后自动返回！');
          this.handleSpinShow();
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    handleSpinShow () {
      setTimeout(() => {
        this.$router.push("/position")
      }, 3000);
    },
  }
}
</script>