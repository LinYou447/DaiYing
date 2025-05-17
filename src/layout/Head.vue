<style scoped>
.headBody{
  width: 100%;
  height: 60px;
  //background-color: #6b91db;
  background:rgba(107,145,219,0.3);
  position: relative;
}
.personIcon{
  height: 100%;
  align-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  right: 20px;
}
.clickable-avatar {
  border: 2px solid #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.clickable-avatar:hover {
  transform: scale(1.1);
}

/* 覆盖默认下拉菜单样式 */
.ivu-select-dropdown {
  min-width: 160px !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}

/* 菜单项样式调整 */
.ivu-dropdown-item {
  padding: 12px 16px !important;
  font-size: 14px !important;
}

.ivu-dropdown-item:hover {
  background: #f5f5f5 !important;
}
.demo-drawer-profile{
  font-size: 14px;
}
.demo-drawer-profile .ivu-col{
  margin-bottom: 12px;
}
.home-style{
  cursor: pointer;
  color: black;
  font-size: 22px;
  position: absolute;
  right: 235px;
  top: 14px;
}
.home-style:hover{
  color: #2d8cf0;
}
.user-name{
  font-size: 16px;
  font-family: initial;
  color: black;
  cursor: pointer;
  margin-left: 7px;
}
.user-name:hover{
  color: #2d8cf0;
}
</style>

<template>
  <div class="headBody">
    <div @click="toHome" class="home-style">首页</div>
    <div class="personIcon">
      <Space size="large" wrap>
        <Dropdown
            :transfer="isMobile"
            :placement="isMobile ? 'bottom' : 'bottom-end'"
            @on-click="handleMenuItem"
            @on-visible-change="handleMenuToggle"
        >
          <!-- 头像触发元素 -->
          <Avatar
              :src="avatarUrl"
              class="clickable-avatar"
              style="cursor: pointer;"
          />
          <template #list>
            <DropdownMenu>
              <DropdownItem name="profile">
                <Icon type="ios-person" /> 个人资料
              </DropdownItem>
              <DropdownItem name="settings">
                <Icon type="ios-settings" /> 账户设置
              </DropdownItem>
              <DropdownItem  name="logout" divided>
                <Icon type="ios-log-out" /> 退出登录
              </DropdownItem>
            </DropdownMenu>
          </template>
          <!-- 下拉菜单内容 -->
        </Dropdown>
      </Space>

      <div @click="toLogin" class="user-name">
        {{this.userName}}
      </div>
    </div>
    <Drawer :closable="false" width="640" v-model="value">
      <p :style="pStyle">用户资料</p>
      <p :style="pStyle">个人信息</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            姓  名: {{formData.name}}
          </Col>
          <Col span="12">
            邮  箱: {{formData.email}}
          </Col>
        </Row>
        <Row>
          <Col span="12">
            城  市: {{ formData.city }}
          </Col>
          <Col span="12">
            国  家: 中国
          </Col>
        </Row>
        <Row>
          <Col span="12">
            出生日期: 1999-02-20
          </Col>
          <Col span="12">
            联系电话: {{formData.phone}}
          </Col>
        </Row>
<!--        Message: Hello, Developer-->
      </div>
      <Divider />
      <p :style="pStyle">教育背景</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            学  历: {{formData.edu}}
          </Col>
          <Col span="12">
            专  业: {{formData.major}}
          </Col>
        </Row>
        <Row>
          <Col span="12">
            毕业日期: 2025-06-30
          </Col>
        </Row>
        {{formData.eduBack}}
      </div>
      <Divider />
      <p :style="pStyle">实习经历</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            实习公司: 百度
          </Col>
          <Col span="12">
            联系电话: +86 {{formData.phone}}
          </Col>
        </Row>
        <Row>
          <Col span="24">
            实习收获: {{formData.internshipExperience}}
          </Col>
        </Row>
      </div>
    </Drawer>
  </div>
</template>

<script>
import axios from "axios";
import {inject} from "vue";

export default {
  name:'HeadPage',
  data(){
    return{
      avatarUrl:'https://i.loli.net/2017/08/21/599a521472424.jpg',
      isMobile:true,
      list:"list",
      tokenFix:'',
      value: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      userName:"点击登录",
      haveUser:false,
      formData:{}
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    if(sessionStorage.getItem("userName")!=='' && sessionStorage.getItem("userName")!==null ){
      this.userName = sessionStorage.getItem("userName");
      this.haveUser = true;
    }
  },
  methods:{
    toHome(){
      this.$router.push("/home")
    },
    handleMenuItem(name) {
      switch(name) {
        case 'profile':
          // this.$router.push('/profile')
            this.proView();
          break
        case 'settings':
          this.$router.push({path:'/regedit',query:{isEdit: true}})
          break
        case 'logout':
          this.handleLogout()
          break
      }
    },
    // 菜单显示状态变化
    handleMenuToggle(visible) {
      console.log('菜单状态:', visible ? '展开' : '收起')
    },
    proView(){
      this.value=true;
      this.getPersonInfo();
    },
    getPersonInfo(){
      axios.get(this.$apiBaseUrl+'/api/biographical/getByUserId?userId='+sessionStorage.getItem("userId"),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res=>{
        if(res.data.code===200){
          this.formData = res.data.data;
        }else{
          this.$Message.error(res.data.message);
        }
      })
    },
    toLogin(){
      if(!this.haveUser){
        this.$router.push("/login")
      }
    },
    // 退出登录示例
    handleLogout() {
      this.$Modal.confirm({
        title: '确认退出',
        content: '您确定要退出当前账号吗？',
        onOk: () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userId');
          sessionStorage.removeItem('userName');
          // 执行退出逻辑
          this.$Message.success('已退出登录');
          //清空页面登录信息 返回登录页面
          this.$router.push("/login");
        }
      })
    }
  }
}

</script>