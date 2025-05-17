<style scoped>
.my-request-body{
  width: 100%;
  height: calc(100vh - 60px);
  background-color: lightgoldenrodyellow;
  padding: 40px;
  overflow-y: scroll;
  overflow: hidden;
}
.grid-item{
  background-color: lightgoldenrodyellow;
}
.grid-item-style{
  font-size: 30px;
  line-height: 80px;
  color: black;
}
.font-color{
  color: white;
}
.font-color-black{
  color: black;
}
.el-row {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow: hidden;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 25px;
}
.bg-purple {
  background: linear-gradient(to right, #aff584, white);
}
.bg-purple2 {
  background: linear-gradient(to right, #fef067, white);
}
.bg-purple3 {
  background: linear-gradient(to right, #ff5050, white);
  color: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 250px;
  padding: 40px;
}
.grid-content:hover{
  //background: white;
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

<template>
  <div style="width: 100%;height: 100%">
    <Head></Head>
    <Modal
        v-model="modal"
        title="审核评价"
        @on-ok="ok"
        @on-cancel="cancel">
      <p>太丑，不通过</p>
    </Modal>
    <div class="my-request-body">
      <el-row :gutter="20">
        <el-col class="grid-item" v-for="(item,index) in items" :key="index" :span="8">
          <div @click="showProgress(item.state,item.mes)" class="grid-content" :class="item.state === 1 ? 'bg-purple' : ( item.state === 2 ? 'bg-purple2' : 'bg-purple3')">
            <div class="grid-item-style" :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.positionName}}</div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">提交时间：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.createTime}}</span>
            </div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">审核状态：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.state === 1 ? '审核通过' : ( item.state === 2 ? '审核中' : '审核不通过')}}</span>
            </div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">公司名称：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.companyName}}</span>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import Head from '../layout/Head.vue'
import {inject} from "vue";
import axios from "axios";
export default {
  name:'MyRequest',
  components:{Head},
  data(){
    return{
      modal:false,
      tokenFix:'',
      items:[]
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    this.getData()
  },
  methods:{
    getData(){
      axios.get(this.$apiBaseUrl+'/api/positionRequest/getByUserId?userId='+sessionStorage.getItem("userId"),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          res.data.data.forEach(item=>{
            if(item.state==='审核通过'){
              item.state=1;
            }else if(item.state === '待审核'){
              item.state = 2;
            }else{
              item.state = 3;
            }
          })
          this.items = res.data.data;
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    instance (state,stateDes) {
      const title = '审核状态';
      const content = stateDes;
      switch (state) {
        case 1:
          this.$Modal.success({
            title: title,
            content: content
          });
          break;
        case 2:
          this.$Modal.warning({
            title: title,
            content: '正在审核请耐心等待！'
          });
          break;
        case 3:
          this.$Modal.error({
            title: title,
            content: content
          });
          break;
      }
    },
    showProgress(state,stateDes){
      this.instance(state,stateDes);
    },
    cancel(){
      this.modal = false;
    },
    ok(){
      this.modal = false;
      this.$router.push('/position')
    }
  }
}

</script>




