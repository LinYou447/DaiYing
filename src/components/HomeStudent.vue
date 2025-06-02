<style scoped>

.homePageStyle {
  width: 100%;
//height: 100%; //background-color: aqua; align-content: center; align-items: center; position: relative;
  background-image: url("../../image/homeBackground.png");
  overflow: hidden;

}

.headPageStyle {
  width: 100%;
  position: absolute;
  top: 0;
}

.footPageStyle {
  width: 100%;
//position: absolute; bottom: 0;
}

.homePageLayot {
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 80px;
  margin-bottom: 40px;

  .layotItem {
    border-radius: 6px;
    height: 100%;
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 15px;
    padding-right: 15px;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: 1px solid #ccc;
  }

  .layotItemEnd {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  //background-color: chocolate; //background: linear-gradient(to bottom, #f6f6f6, #5d6b72); align-items: center; align-content: center;
    color: white;
    font-size: 20px;
    font-family: math;
  }

  .scale-up {
    transform: scale(1.1); /* 放大10% */
    transition: transform 0.3s ease; /* 平滑过渡效果 */
  }

  .shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
  }

  .solution-carousel .el-carousel__item.is-active {
    transform: scale(2) !important;
    z-index: 2;
  }

  .solution-carousel .el-carousel__item:not(.is-active) {
    transform: scale(0.85) !important;
    opacity: 0.9;
  }
}
.tabs-style{
  width: 100%;
  height: 700px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.item-style{
  width: 100%;
  line-height: 21px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.position-style{
  width: 350px;
  height: 230px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  margin-bottom: 15px;
  position: relative;
  padding: 26px 19px 0 19px;
  border-bottom: 1px dashed #eaeaea;
  margin-right: 40px;
  margin-left: 15px;
}
.title-style{
  display: inline-block;
  max-width: 160px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}
.money-style{
  float: right;
  color: #fd8150;
  font-size: 14px;
}
.label-style{
  display: inline-block;
  max-width: 105px;
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  margin-right: 5px;
  border-radius: 12px;
  background-color: #fafafa;
  color: #888;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info-style{
  max-width: 115px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-size: 11px;
  margin-left: 0;
  padding-left: 14px;

}
.img-style{
  width: 40px;
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  background-image: url("/image/label.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.company-style{
  display: flex;
  width: 100%;
  height: 65px;
  padding-top: 20px;
}
.company-img-style{
  width: 50px;
  height: 50px;
  background-image: url("/image/yd.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.company-title-style{
  display: inline-block;
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #6aa2e4;
  cursor: pointer;
}
.company-label-style{
  max-width: 140px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b2b2b2;
}
</style>


<template>
  <div class="homePageStyle">
    <div class="headPageStyle">
      <Head></Head>
    </div>
    <div class="homePageLayot">
      <div class="layotItem"
           :class="{ 'scale-up': isHovered, 'shadow': isHovered }"
           @mouseover="isHovered = true"
           @mouseleave="isHovered = false"
           @click="toBiographical('bio')"
      >
        <div class="layotItemEnd">
          个人简历
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered1, 'shadow': isHovered1 }"
           @mouseover="isHovered1 = true"
           @mouseleave="isHovered1 = false"
           @click="toBiographical('position')"
      >
        <div class="layotItemEnd">
          职位信息
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered2, 'shadow': isHovered2 }"
           @mouseover="isHovered2 = true"
           @mouseleave="isHovered2 = false"
           @click="toBiographical('myRequest')"
      >
        <div class="layotItemEnd">
          我的申请
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered3, 'shadow': isHovered3 }"
           @mouseover="isHovered3 = true"
           @mouseleave="isHovered3 = false"
           @click="toBiographical('lvShare')"
      >
        <!--        <div class="layotItemTop">-->

        <!--        </div>-->
        <div class="layotItemEnd">
          经验分享
        </div>
      </div>
      <!--      <div class="layotItem"-->
      <!--           :class="{ 'scale-up': isHovered4, 'shadow': isHovered4 }"-->
      <!--           @mouseover="isHovered4 = true"-->
      <!--           @mouseleave="isHovered4 = false"-->
      <!--      >-->

      <!--        <div class="layotItemEnd">-->
      <!--          个人简历-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div style="width: 100%;height: 450px;">
      <el-carousel width="100%" :interval="4000" type="card" height="450px">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <div class="slide-background" style="height: 450px;background-size: 100% 100%;"
               :style="{ backgroundImage: `url(${item.bgImage})` }"></div>
          <!-- 轮播项内容 (放在背景层之上) -->
          <!--          <div class="slide-content">-->
          <!--            <h3>{{ item.title }}</h3>-->
          <!--            <p>{{ item.description }}</p>-->
          <!--          </div>-->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tabs-style" >
      <Tabs value="name1">
        <TabPane label="热门职位" name="name1">
          <div style="width: 100%;height: 647px;display: flex; flex-wrap: wrap;justify-content: space-around;">
            <div class="position-style" v-for="(item,index) in positon1" :key="index">
              <div class="item-style" style="">
                <span class="title-style">{{item.title}}</span>
                <span class="money-style">{{item.money}}</span>
              </div>
              <div style="width: 100%;display: flex;margin-bottom: 15px;overflow: hidden;">
                <span class="label-style" v-for="(item1,index) in item.label" :key="index">
                  {{item1}}
                </span>
              </div>
              <div style="width: 100%;height:36px;line-height: 19px;font-size: 14px;color: #666;border-bottom: 1px dashed #eaeaea;">
                <span class="info-style">{{item.contray}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.person}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.edu}}</span>
              </div>
              <div v-if="item.positionLable==='school'" class="img-style"></div>
              <div class="company-style">
                <div class="company-img-style"></div>
                <div style="width: 100%;height: 100%;padding-left: 15px">
                  <div class="company-title-style">{{item.company}}</div>
                  <div class="company-label-style">{{item.comapnyLabel}}</div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="最新职位" name="name2">
          <div style="width: 100%;height: 647px;display: flex; flex-wrap: wrap;justify-content: space-around;">
            <div class="position-style" v-for="(item,index) in positon2" :key="index">
              <div class="item-style" style="">
                <span class="title-style">{{item.title}}</span>
                <span class="money-style">{{item.money}}</span>
              </div>
              <div style="width: 100%;display: flex;margin-bottom: 15px;overflow: hidden;">
                <span class="label-style" v-for="(item1,index) in item.label" :key="index">
                  {{item1}}
                </span>
              </div>
              <div style="width: 100%;height:36px;line-height: 19px;font-size: 14px;color: #666;border-bottom: 1px dashed #eaeaea;">
                <span class="info-style">{{item.contray}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.person}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.edu}}</span>
              </div>
              <div v-if="item.positionLable==='school'" class="img-style"></div>
              <div class="company-style">
                <div class="company-img-style"></div>
                <div style="width: 100%;height: 100%;padding-left: 15px">
                  <div class="company-title-style">{{item.company}}</div>
                  <div class="company-label-style">{{item.comapnyLabel}}</div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="推荐职位" name="name3">
          <div style="width: 100%;height: 647px;display: flex; flex-wrap: wrap;justify-content: space-around;">
            <div class="position-style" v-for="(item,index) in positon3" :key="index">
              <div class="item-style" style="">
                <span class="title-style">{{item.title}}</span>
                <span class="money-style">{{item.money}}</span>
              </div>
              <div style="width: 100%;display: flex;margin-bottom: 15px;overflow: hidden;">
                <span class="label-style" v-for="(item1,index) in item.label" :key="index">
                  {{item1}}
                </span>
              </div>
              <div style="width: 100%;height:36px;line-height: 19px;font-size: 14px;color: #666;border-bottom: 1px dashed #eaeaea;">
                <span class="info-style">{{item.contray}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.person}}</span>
                <span class="info-style" style="margin-left: 16px">{{item.edu}}</span>
              </div>
              <div v-if="item.positionLable==='school'" class="img-style"></div>
              <div class="company-style">
                <div class="company-img-style"></div>
                <div style="width: 100%;height: 100%;padding-left: 15px">
                  <div class="company-title-style">{{item.company}}</div>
                  <div class="company-label-style">{{item.comapnyLabel}}</div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <div class="footPageStyle">
      <Foot></Foot>
    </div>
  </div>
  <!--  <div class="bodyStyle"></div>-->
</template>


<script>
import Head from '../layout/Head.vue'
import Foot from '../layout/Foot.vue'

// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name: "HomePage",
  components: {Head, Foot},
  data() {
    return {
      value: 0,
      carouselItems: [
        {
          title: 'Slide 1',
          description: 'Description for slide 1',
          bgImage: require('/image/banner1.jpg') // 使用 require 确保路径正确 (Webpack)
        },
        {
          title: 'Slide 2',
          description: 'Description for slide 2',
          bgImage: require('/image/banner2.jpg')
        },
        {
          title: 'Slide 3',
          description: 'Description for slide 3',
          bgImage: require('/image/positionBack.png')
        },
        {
          title: 'Slide 4',
          description: 'Description for slide 4',
          bgImage: require('/image/banner3.jpg')
        }
        // ... 更多轮播项
      ],
      positon1: [
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'Java初级开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','年终奖'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:''
        },
        {
          title: 'Android /JAVA开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','绩效奖金'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'JAVA实习生',
          money: '300-500/天',
          label: ['远程实习','实习证明','节日福利'],
          contray: '全国',
          person: '5天/周',
          edu: '3个月',
          company: '阿里',
          comapnyLabel:'教育/培训',
          positionLable:''
        },
        {
          title: 'java开发',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '大专',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
      ],
      positon2: [
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'Java初级开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','年终奖'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:''
        },
        {
          title: 'Android /JAVA开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','绩效奖金'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'JAVA实习生',
          money: '300-500/天',
          label: ['远程实习','实习证明','节日福利'],
          contray: '全国',
          person: '5天/周',
          edu: '3个月',
          company: '阿里',
          comapnyLabel:'教育/培训',
          positionLable:''
        },
        {
          title: 'java开发',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '大专',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
      ],
      positon3: [
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'Java初级开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','年终奖'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:''
        },
        {
          title: 'Android /JAVA开发工程师',
          money: '6k-12k/月',
          label: ['五险一金','餐补','绩效奖金'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: 'JAVA实习生',
          money: '300-500/天',
          label: ['远程实习','实习证明','节日福利'],
          contray: '全国',
          person: '5天/周',
          edu: '3个月',
          company: '阿里',
          comapnyLabel:'教育/培训',
          positionLable:''
        },
        {
          title: 'java开发',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生 | 毕业1年内',
          edu: '大专',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
        {
          title: '预约开发工程师',
          money: '6k-15k/月',
          label: ['五险一金','定期体检','餐补'],
          contray: '全国',
          person: '应届生',
          edu: '本科',
          company: '百度',
          comapnyLabel:'互联网/游戏/软件',
          positionLable:'school'
        },
      ],
      isHovered: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
    }
  },
  methods: {
    toBiographical(name) {
      //如果没有登录返回到登录页面
      switch (name) {
        case 'bio':
          // this.$router.push('/profile')
          this.$router.push("/biographical")
          break
        case 'position':
          this.$router.push("/position")
          break
        case 'myRequest':
          this.$router.push("/myRequest")
          break
        case 'lvShare':
          this.$router.push("/lvShare")
          break
      }
    }
  }
}
</script>