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
          <div class="layout-content-left-box"></div>
          <div class="layout-content-right-box"></div>
        </div>
      </Content>
      <Footer  class="layout-footer">
        <div class="layout-footer-box" ></div>
      </Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  name:'PositionInfoPage',
  data(){
    return{
      positionInfo:{},
      isHovered: false,
      isHovered1: false,
    }
  },
  mounted() {
    this.handleSpinShow();
    // this.handleSpinCustom();
  },
  methods:{
    handleSpinShow () {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    },
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    }
  }
}
</script>