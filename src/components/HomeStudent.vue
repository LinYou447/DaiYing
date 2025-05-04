<script>
import Head from '../layout/Head.vue'
import Foot from '../layout/Foot.vue'

// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name:"HomePage",
  components:{Head,Foot},
  data(){
    return{
      isHovered:false,
      isHovered1:false,
      isHovered2:false,
      isHovered3:false,
      isHovered4:false,
    }
  },
  methods:{
    toBiographical(name){
      //如果没有登录返回到登录页面
      switch(name) {
        case 'bio':
          // this.$router.push('/profile')
          this.$router.push("/biographical")
          break
        case 'position':
          this.$router.push("/position")
          break
        case 'logout':
          this.handleLogout()
          break
      }
    }
  }
}
</script>

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
        <div class="layotItemTop">

        </div>
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
        <div class="layotItemTop">

        </div>
        <div class="layotItemEnd">
          职位信息
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered2, 'shadow': isHovered2 }"
           @mouseover="isHovered2 = true"
           @mouseleave="isHovered2 = false"
      >
        <div class="layotItemTop">

        </div>
        <div class="layotItemEnd">
          我的申请
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered3, 'shadow': isHovered3 }"
           @mouseover="isHovered3 = true"
           @mouseleave="isHovered3 = false"
      >
        <div class="layotItemTop">

        </div>
        <div class="layotItemEnd">
          经验分享
        </div>
      </div>
      <div class="layotItem"
           :class="{ 'scale-up': isHovered4, 'shadow': isHovered4 }"
           @mouseover="isHovered4 = true"
           @mouseleave="isHovered4 = false"
      >
        <div class="layotItemTop">

        </div>
        <div class="layotItemEnd">
          个人简历
        </div>
      </div>
    </div>
    <div class="footPageStyle">
      <Foot></Foot>
    </div>
  </div>
<!--  <div class="bodyStyle"></div>-->
</template>

<style scoped>

.homePageStyle{
  width: 100%;
  height: 100%;
  //background-color: aqua;
  align-content: center;
  align-items: center;
  position: relative;
  background-image: url("../../image/homeBackground.png");
}
.headPageStyle{
  width: 100%;
  position: absolute;
  top: 0;
}
.footPageStyle{
  width: 100%;
  position: absolute;
  bottom: 0;
}
.homePageLayot{
  width: 100%;
  height: 500px;
  display: flex;
  .layotItem{
    border-radius: 6px;
    height: 100%;
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
    background:rgba(0,0,0,0.5);
    cursor: pointer;
    border: 1px solid #ccc;
  }
  .layotItemTop{
    width: 100%;
    height: 75%;
    background-color: bisque;
    background-image: url("../../image/homeItem.png");
    background-size: cover;
  }
  .layotItemEnd{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-around;
    //background-color: chocolate;
    background: linear-gradient(to bottom, #f6f6f6, #5d6b72);
    align-items: center;
    align-content: center;
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
}
</style>