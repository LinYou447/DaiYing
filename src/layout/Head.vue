<style scoped>
.headBody{
  width: 100%;
  height: 60px;
  //background-color: #6b91db;
  background:rgba(107,145,219,0.3);
  position: relative;
}
.personIcon{
  width: 60px;
  height: 100%;
  align-content: center;
  align-items: center;
  position: absolute;
  right: 0;
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
</style>

<template>
  <div class="headBody">
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
    </div>
    <Drawer :closable="false" width="640" v-model="value">
      <p :style="pStyle">用户资料</p>
      <p :style="pStyle">个人信息</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            姓  名: 刘德华
          </Col>
          <Col span="12">
            邮  箱: wojibuzhu447@163.com
          </Col>
        </Row>
        <Row>
          <Col span="12">
            城  市: 北京
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
            联系电话: 15203507334
          </Col>
        </Row>
<!--        Message: Hello, Developer-->
      </div>
      <Divider />
      <p :style="pStyle">教育背景</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            学  历: 本科
          </Col>
          <Col span="12">
            专  业: 软件工程
          </Col>
        </Row>
        <Row>
          <Col span="12">
            毕业日期: 2025-06-30
          </Col>
        </Row>
        简  介: 可熟练运用java开发软件，可独立开发前后端，具备一定sql调优能力，了解jvm运行机制，专业技术牢靠.
      </div>
      <Divider />
      <p :style="pStyle">实习经历</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            实习公司: 百度
          </Col>
          <Col span="12">
            联系电话: +86 18888888888
          </Col>
        </Row>
        <Row>
          <Col span="24">
            实习收获: 熟练掌握专业知识，对问题的处理能力得到了显著提升，检验了自我的学习能力。强化提升了自我认识。
          </Col>
        </Row>
      </div>
    </Drawer>
  </div>
</template>

<script>
export default {
  name:'HeadPage',
  data(){
    return{
      avatarUrl:'https://i.loli.net/2017/08/21/599a521472424.jpg',
      isMobile:true,
      list:"list",
      value: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      }
    }
  },
  methods:{
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
    },
    // 退出登录示例
    handleLogout() {
      this.$Modal.confirm({
        title: '确认退出',
        content: '您确定要退出当前账号吗？',
        onOk: () => {
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