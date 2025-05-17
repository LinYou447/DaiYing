<style scoped>
.positionInfoBody{
  width: 100%;
  height: 100%;
  background-color: white;
}
.headerFont{
  color: white;
  margin-left: 60px;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
}
.layout-header{
  display: flex;
  position: relative;
  justify-content: flex-end;
}
.layout-content{
  width: 100%;
  height: 100%;
  background-color: white;
}
.layout-content-left{
  width: 100%;
  background: #f8f9fa;
  display: -ms-flexbox;
  display: flex;
  font-family: PingFang SC;
  font-style: normal;
  height: 100%;
  justify-content: center;
  min-height: calc(100vh - 295px);
  padding: 40px 0;
  position: relative;
}
.layout-content-left-box{
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(54, 97, 174, .1);
  font-size: 16px;
  min-height: 230px;
  padding: 40px;
  width: 840px;
}
.layout-content-right-box{
  margin-left: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(54, 97, 174, .1);
  color: #1f2329;
  font-weight: 500;
  padding: 40px;
  width: 368px;
}
.layout-sider{

}
.headerFont1{
  color: #3370ff;
  margin-left: 60px;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
}
.layout-footer{
  width: 100%;
  height: 340px;
  background-color: rgb(16, 18, 20);
  background-image: url("../../image/foot.png");
  background-size: cover;
}
.font-des-style{
  color: #646a73;
  font-size: 14px;
  line-height: 2em;
  overflow: hidden;
  white-space: pre;
  white-space: pre-line;
  word-break: break-word;
  margin-top: 20px;
}
.title-icon{
  border-left: 4px solid #3370ff;
  content: "";
  display: block;
  height: 20px;
  left: 1px;
  position: absolute;
  top: 47px;
}
.layout-content-right-box-item{
  width: 100%;
  height: 90px;
  margin-bottom: 25px;
  color: #1f2329;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  max-width: 248px;
  overflow: hidden;
  //text-overflow: ellipsis;
}
.font-style{
  align-items: center;
  color: #646a73;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 4px;
}
.font-title-style{
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #1f2329;
  display: -webkit-box;
  display: -moz-box;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  max-width: 248px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.font-title-style:hover{
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #3370ff;
  display: -webkit-box;
  display: -moz-box;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  max-width: 248px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.font-h2{
  color: #1f2329;
  font-size: 21px;
  font-weight: 800;
  line-height: 1.52;
  margin: 40px 0 8px;
  padding-left: 10px;
  position: relative;
}
</style>
<template>
  <div class="positionInfoBody">
    <Layout>
      <Header class="layout-header">
        <div style="color: white;
           width: 170px;
           font-size: 16px;
           font-style: normal;
           font-weight: 800;
           position: absolute;
           left: 50px;">公司名称</div>
        <div :class="isHovered ? 'headerFont1' : 'headerFont'" @mouseover="isHovered = true" @mouseout="isHovered = false">关于我们</div>
        <div style="margin-right: 250px" :class="isHovered1 ? 'headerFont1' : 'headerFont'" @mouseover="isHovered1 = true" @mouseout="isHovered1 = false">职位</div>
      </Header>
      <Content class="layout-content">
        <div class="layout-content-left">
          <div class="layout-content-left-box">
            <div>
              <h1 style="color: black">{{positionInfo.name}}</h1>
              <span style="color: black;font-size: 14px">{{positionInfo.workLocation}}&nbsp;&nbsp; |&nbsp;&nbsp; 职位ID： {{positionInfo.positionCode}}&nbsp;&nbsp; |&nbsp;&nbsp; 薪资：{{positionInfo.money}}</span>
              <div style="width: 100%;display: flex;position: relative">
                <div class="title-icon"></div>
                <h2 class="font-h2">职位描述</h2>
              </div>
              <span class="font-des-style">{{positionInfo.jobDescription}}</span>
              <div style="width: 100%;display: flex;position: relative">
                <div class="title-icon"></div>
                <h2 class="font-h2">职位要求</h2>
              </div>
              <span class="font-des-style">{{positionInfo.jobRequirements}}</span>
            </div>
            <div style="margin-top: 30px;display: flex">
              <Button type="primary" @click="toBioView">申请职位</Button>
              <Button style="margin-left: 20px;width: 96px" @click="toReturn">返回</Button>
            </div>
          </div>
          <div class="layout-content-right-box">
            <div style="width: 100%;display: flex;position: relative;margin-bottom: 35px">
              <div class="title-icon"></div>
              <h2 class="font-h2">相关职位</h2>
            </div>
            <div class="layout-content-right-box-item">
              <div class="font-title-style" style="margin-bottom: 10px">c++开发工程师</div>
              <div class="font-style">{{positionInfo.city}}&nbsp;&nbsp; | &nbsp;&nbsp; 薪资：{{positionInfo.money}}</div>
              <div class="font-style">职位ID： {{positionInfo.positionCode}}</div>
            </div>
            <div class="layout-content-right-box-item">
              <div class="font-title-style" style="margin-bottom: 10px">c++开发工程师</div>
              <div class="font-style">{{positionInfo.city}}&nbsp;&nbsp; | &nbsp;&nbsp; 薪资：{{positionInfo.money}}</div>
              <div class="font-style">职位ID： {{positionInfo.positionCode}}</div>
            </div>
            <div class="layout-content-right-box-item">
              <div class="font-title-style" style="margin-bottom: 10px">c++开发工程师</div>
              <div class="font-style">{{positionInfo.city}}&nbsp;&nbsp; | &nbsp;&nbsp; 薪资：{{positionInfo.money}}</div>
              <div class="font-style">职位ID： {{positionInfo.positionCode}}</div>
            </div>
          </div>
        </div>
      </Content>
      <Footer  class="layout-footer">
        <div class="layout-footer-box" ></div>
      </Footer>
    </Layout>
  </div>
</template>
<script>
import {Button} from "view-ui-plus";
import {inject} from "vue";
import axios from "axios";

export default {
  name:'PositionInfoPage',
  components: {Button},
  data(){
    return{
      tokenFix:'',
      positionId:null,
      companyId:'',
      positionInfo:{
        name:"JAVA开发工程师",
        city:'北京',
        money:'面谈',
        positionCode:'A47541',
        jobDescription:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
            '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
            '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
            '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
        jobRequirements:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
            '2、学习能力强，有独立解决问题的能力；\n' +
            '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
            '4、有良好的沟通能力和业务理解能力。'
      },
      isHovered: false,
      isHovered1: false,
      isHovered2:false,
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    this.positionId = this.$route.query.positionId;
    this.companyId = this.$route.query.companyId;
    // this.handleSpinShow();
    this.getPositionInfo();
    // this.handleSpinCustom();
  },
  methods:{
    // handleSpinShow () {
    //   this.$Spin.show();
    //   setTimeout(() => {
    //     this.$Spin.hide();
    //   }, 3000);
    // },
    getPositionInfo(){
      this.$Spin.show();
      axios.get(this.$apiBaseUrl+'/api/position/getById?id='+this.positionId,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          this.$Spin.hide();
          this.positionInfo = res.data.data;
        }else{
          this.$Spin.hide();
          this.$Message.error(res.data.message);
        }
      })
    },
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
    toBioView(){
      this.$router.push({path:'/bioView',query:{positionId: this.positionId,companyId:this.companyId}})
    },
    toReturn(){
      this.$router.push("/position")
    }
  }
}
</script>