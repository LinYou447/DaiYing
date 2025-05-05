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
              <RadioGroup v-model="formValidate.gender">
                <Radio disabled label="male">男</Radio>
                <Radio disabled label="female">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="邮箱" disabled>
              <Input disabled v-model="formValidate.mail" ></Input>
            </FormItem>
          </Col>
          <Col span="2"></Col>
          <Col span="4">
            <div style="width: 100%;height: 150px;border: solid 1px black">

            </div>
          </Col>
        </Row>
        <FormItem label="所在城市" prop="city">
          <City disabled v-model="formValidate.city" />
        </FormItem>
        <FormItem label="籍贯">
          <Input disabled v-model="formValidate.name1" ></Input>
        </FormItem>
        <FormItem label="电话">
          <Input disabled v-model="formValidate.name2" ></Input>
        </FormItem>
        <FormItem label="学历">
          <RadioGroup v-model="formValidate.name3">
            <Radio disabled label="zhuanke">专科</Radio>
            <Radio disabled label="benke">本科</Radio>
            <Radio disabled label="shuoshi">硕士</Radio>
            <Radio disabled label="boshi">博士</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="专业">
          <Input disabled v-model="formValidate.name4"></Input>
        </FormItem>
        <FormItem label="教育背景">
          <Input disabled v-model="formValidate.desc" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="实习经历">
          <Input disabled v-model="formValidate.desc1" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="证书技能">
          <Input disabled v-model="formValidate.desc2" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem label="自我评价">
          <Input disabled v-model="formValidate.desc3" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
        </FormItem>
        <FormItem>
          <div class="buttonStyle">
            <Button style="width: 170px" type="primary" @click="handleSubmit">提交申请</Button>
            <Button @click="returnHome" style="margin-left: 8px;width: 170px">取消</Button>
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
  data(){
    return{
      value1: '110000',
      formValidate: {
        name: '刘德华',
        name1: '湖北省孝感市',
        name2: '152035077334',
        name3: 'benke',
        name4: '软件工程',
        mail: 'wojibuzhu447@163.com',
        city: '',
        gender: 'male',
        interest: [],
        date: '',
        time: '',
        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        desc1: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        desc2: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        desc3: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      }
    }
  },
  methods:{
    returnHome(){
      this.$router.push("/positionInfo")
    },
    handleSubmit () {
      //检查简历信息是否完整
      this.$Message.success('投递成功,2秒后自动返回！');
      // this.$router.push("/position")
      this.handleSpinShow();
    },
    handleSpinShow () {
      setTimeout(() => {
        this.$router.push("/position")
      }, 3000);
    },
  }
}
</script>