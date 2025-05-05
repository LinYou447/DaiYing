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
          <div @click="showProgress(item.state,item.stateDes)" class="grid-content" :class="item.state === 1 ? 'bg-purple' : ( item.state === 2 ? 'bg-purple2' : 'bg-purple3')">
            <div class="grid-item-style" :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.title}}</div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">提交时间：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">2025-05-24</span>
            </div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">审核状态：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">{{item.state === 1 ? '审核通过' : ( item.state === 2 ? '审核中' : '审核不通过')}}</span>
            </div>
            <div style="margin-bottom: 5px">
              <span style="font-size: 16px">公司名称：</span>
              <span :class="item.state === 3 ? 'font-color' : 'font-color-black'">XXXXXXXX</span>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import Head from '../layout/Head.vue'
export default {
  name:'MyRequest',
  components:{Head},
  data(){
    return{
      modal:false,
      items:[
          {
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
            state:1,
            stateDes:'审核通过！'
         }, {
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:3,
          stateDes:'太丑审核不通过！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:1,
          stateDes:'审核通过！'
        }, {
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:3,
          stateDes:'太丑审核不通过！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:1,
          stateDes:'审核通过！'
        }, {
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:3,
          stateDes:'太丑审核不通过！'
        },{
          title:"JAVA开发工程师",
          city:'北京',
          money:'面谈',
          positionId:'A47541',
          positionDesc:'面向2026届毕业生（2025年9月-2026年8月期间毕业），为符合岗位要求的同学提供转正机会。\n' +
              '团队介绍：本公司覆盖150个国家和地区的国际短视频平台，我们希望通过开发发现真实、有趣的瞬间，\n' +
              '让生活更美好。本公司在全球各地设有办公室，全球总部位于洛杉矶和新加坡，办公地点还包括纽约、\n' +
              '伦敦、都柏林、巴黎、柏林、迪拜、雅加达、首尔和东京等多个城市',
          positionRequire:'1、2025届获得本科及以上学历，计算机相关专业；\n' +
              '2、学习能力强，有独立解决问题的能力；\n' +
              '3、熟悉面向对象编程，掌握Java/C＋＋/Python/Go中的至少一门语言，Java/Go背景优先；\n' +
              '4、有良好的沟通能力和业务理解能力。',
          state:2,
          stateDes:'正在审核中！'
        },
      ]
    }
  },
  methods:{
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




