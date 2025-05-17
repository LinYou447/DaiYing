<style scoped>
.positionStyle{
  height: 100%;
  width: 100%;
  padding: 30px;
}
.list_item{
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px 0;
  padding-left: 50px;
  cursor: pointer;
  display: flex;
}
.list_item:hover{
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.list_item .list_item_info {
  padding-right: 20px;
}
.list_item_info {
  width: 50%;
}
.list_item .list_item_title{
  font-size: 24px;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 16px;
  font-weight: 600;
  max-width: 660px;
}
.list_item .list_item_type {
  font-size: 18px;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 19px;
  font-weight: 400;
  max-width: 660px;
}
.list_item .list_item_map{
  font-size: 14px;
  color: #00000080;
}
.list_item .list_item_title .hot{
  vertical-align: middle;
  display: inline-block;
  font-size: 12px;
  margin-left: 20px;
  padding: 1px 4px;
  background: linear-gradient(149deg, #FF6900 0%, #E1150A 100%);
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
}
.list_item .list_item_type .type_border {
  padding: 0 8px;
  text-align: center;
  display: inline-block;
  line-height: 28px;
}
.list_item .list_item_image {
  cursor: pointer;
  //background-color: black;
  width: 50%;
  height: 100%;
  padding-right: 50px;
}
.layout-header{
  margin-bottom: 20px;
  position: relative;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
</style>

<template>
  <div class="positionStyle">
    <Layout>
      <Header class="layout-header">
        <Icon style="width: 12px;
              position: relative;
              left: 0px;
              height: 0px;
              color: white;
              cursor: pointer" @click="goback" type="ios-arrow-back" />
        <Input suffix="ios-search" placeholder="输入关键词搜索" style="width: auto;float: right;margin-top: 15px" />
        <Tag style="cursor: pointer; margin-left: 30px" color="warning">Java开发工程师</Tag>
        <Tag style="cursor: pointer" color="magenta">Python开发工程师</Tag>
        <Tag style="cursor: pointer" color="red">C#开发</Tag>
        <Tag style="cursor: pointer" color="volcano">C++开发工程师</Tag>
        <Tag style="cursor: pointer" color="orange">3Dmax建模师</Tag>
        <Tag style="cursor: pointer" color="gold">Web开发工程师</Tag>
        <Tag style="cursor: pointer" color="yellow">系统架构师</Tag>
        <Tag style="cursor: pointer" color="lime">前台人员</Tag>
        <Tag style="cursor: pointer" color="green">人力</Tag>
        <Tag style="cursor: pointer" color="cyan">采购员</Tag>
        <Tag style="cursor: pointer" color="blue">Go语言开发</Tag>
      </Header>
      <Content class="layout-content">
        <div @click="positionInfo(item.id,item.companyId)" v-for="item in this.itemList" :key="item.id"  class="list_item" flex="main:justify cross:center">
          <div class="list_item_info">
            <div class="list_item_title">
              <span style="margin-right: 10px">{{item.cpmpanyname}}---{{ item.name }}</span>
<!--              <span class="hot">{{item.degree}}</span>-->
              <Tag v-if="item.degree==='不急'" color="success">不急</Tag>
              <Tag v-if="item.degree==='紧急'" color="error">紧急</Tag>
              <Tag v-if="item.degree==='一般'" color="warning">一般</Tag>
            </div>
            <div class="list_item_type">
              <span>{{item.recruitmentType}}</span>
              <span class="type_border"></span>
              <span>{{item.category}}</span>
              <span class="type_border"></span>
              <span>{{item.country}}</span>
            </div>
            <div class="list_item_map">
              <span>工作地点：{{item.workLocation}}</span>
            </div>
          </div>
          <div class="list_item_image">
            <span>职位简介：{{item.jobDescription}}</span>
          </div>
        </div>
      </Content>
      <Footer  class="layout-footer"></Footer>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import {inject} from "vue";

export default {
  name:'PositionPage',
  data(){
    return{
      tokenFix:'',
      itemList:[
        // {
        //   id:'1',
        //   companyname:'XXX科技公司',
        //   name:'Java开发工程师',
        //   isHot:'急招',
        //   posCategory:'校园招聘',
        //   category:'技术研究类',
        //   country:'China',
        //   workLocation:'北京，天津',
        //   jobDescription:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
        //       '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
        //       '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
        //       '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市。'
        // },{
        //   id:'2',
        //   companyname:'XXX科技公司',
        //   name:'Java开发工程师',
        //   isHot:'急招',
        //   posCategory:'校园招聘',
        //   category:'技术研究类',
        //   country:'China',
        //   workLocation:'北京，天津',
        //   jobDescription:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
        //       '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
        //       '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
        //       '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市。'
        // },{
        //   id:'3',
        //   companyname:'XXX科技公司',
        //   name:'Java开发工程师',
        //   isHot:'急招',
        //   posCategory:'校园招聘',
        //   category:'技术研究类',
        //   country:'China',
        //   workLocation:'北京，天津',
        //   jobDescription:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
        //       '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
        //       '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
        //       '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市。'
        // },{
        //   id:'4',
        //   companyname:'XXX科技公司',
        //   name:'Java开发工程师',
        //   isHot:'急招',
        //   posCategory:'校园招聘',
        //   category:'技术研究类',
        //   country:'China',
        //   workLocation:'北京，天津',
        //   jobDescription:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
        //       '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
        //       '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
        //       '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市。'
        // }
      ]
    }
  },
  mounted() {
    // this.handleSpinShow();
    this.tokenFix = inject("tokenFix");
    this.getAllPosition();
    // this.handleSpinCustom();
  },
  methods:{
    goback(){
      this.$router.push("/home")
    },
    handleSpinShow () {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    },
    getAllPosition(companyId){
      this.$Spin.show();
      var search = {
        name: null,
        companyId:companyId,
        state:'审核通过'
      }
      axios.post(this.$apiBaseUrl+'/api/position/getAllPosition',search,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          this.itemList = res.data.data;
          this.$Spin.hide();
        }else{
          this.$Message.error(res.data.message);
          this.$Spin.hide();
        }
      })
    },
    handleSpinCustom () {
      this.$Spin.show({
        render: (h) => {
          return h('div', [
            h('Icon', {
              'class': 'demo-spin-icon-load',
              props: {
                type: 'ios-loading',
                size: 18
              }
            }),
            h('div', '加载中...')
          ])
        }
      });
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    },
    positionInfo(positionId,companyId){
      if(positionId){
        this.$router.push({path:'/positionInfo',query:{positionId: positionId,companyId:companyId}})
      }else{
        alert("职位id为空")
      }
    }
  }
}
</script>