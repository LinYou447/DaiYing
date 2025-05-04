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
            <FormItem label="性别" prop="gender">
              <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
              <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
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
<!--          <Select v-model="formValidate.city" placeholder="">-->
<!--            <Option value="beijing">北京</Option>-->
<!--            <Option value="shanghai">上海</Option>-->
<!--            <Option value="shenzhen">天津</Option>-->
<!--          </Select>-->
          <City v-model="formValidate.city" />
        </FormItem>
        <FormItem label="籍贯" prop="name1">
          <Input v-model="formValidate.name1" placeholder="请输入籍贯"></Input>
        </FormItem>
        <FormItem label="电话" prop="name2">
          <Input v-model="formValidate.name2" placeholder="请输入电话"></Input>
        </FormItem>
        <FormItem label="学历" prop="name3">
          <RadioGroup v-model="formValidate.name3">
            <Radio label="zhuanke">专科</Radio>
            <Radio label="benke">本科</Radio>
            <Radio label="shuoshi">硕士</Radio>
            <Radio label="boshi">博士</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="专业" prop="name4">
          <Input v-model="formValidate.name4" placeholder="请输入专业"></Input>
        </FormItem>
<!--        <FormItem label="预计入职时间">-->
<!--          <Row>-->
<!--            <Col span="11">-->
<!--              <FormItem prop="date">-->
<!--                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>-->
<!--              </FormItem>-->
<!--            </Col>-->
<!--            <Col span="2" style="text-align: center">-</Col>-->
<!--            <Col span="11">-->
<!--              <FormItem prop="time">-->
<!--                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>-->
<!--              </FormItem>-->
<!--            </Col>-->
<!--          </Row>-->
<!--        </FormItem>-->
<!--        <FormItem label="Hobby" prop="interest">-->
<!--          <CheckboxGroup v-model="formValidate.interest">-->
<!--            <Checkbox label="Eat"></Checkbox>-->
<!--            <Checkbox label="Sleep"></Checkbox>-->
<!--            <Checkbox label="Run"></Checkbox>-->
<!--            <Checkbox label="Movie"></Checkbox>-->
<!--          </CheckboxGroup>-->
<!--        </FormItem>-->
        <FormItem label="教育背景" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="实习经历" prop="desc1">
          <Input v-model="formValidate.desc1" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="证书技能" prop="desc2">
          <Input v-model="formValidate.desc2" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="自我评价" prop="desc3">
          <Input v-model="formValidate.desc3" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入..."></Input>
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
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        name1: [
          { required: true, message: '籍贯不能为空', trigger: 'blur' }
        ],
        name2: [
          { required: true, message: '联系电话不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        gender: [
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
        desc: [
          { required: true, message: '请填写教育背景', trigger: 'blur' },
          { type: 'string', min: 20, message: '最少20个字符', trigger: 'blur' }
        ],
        desc1: [
          { required: true, message: '请填写校园经历', trigger: 'blur' },
          { type: 'string', min: 20, message: '最少20个字符', trigger: 'blur' }
        ],
        desc2: [
          { required: true, message: '请填写证书技能', trigger: 'blur' },
          { type: 'string', min: 20, message: '最少20个字符', trigger: 'blur' }
        ],
        desc3: [
          { required: true, message: '请填写自我评价', trigger: 'blur' },
          { type: 'string', min: 20, message: '最少20个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    returnHome(){
      this.$router.push("/home")
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('简历保存成功!');
        } else {
          this.$Message.error('保存失败!');
        }
      })
    },
    handleReset (name) {
      this.formValidate={
        name: '',
            name1: '',
            name2: '',
            name3: '',
            name4: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            desc: '',
            desc1: '',
            desc2: '',
            desc3: '',
      };
      this.$refs[name].resetFields();
    }
  }
}
</script>