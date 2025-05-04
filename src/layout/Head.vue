<style scoped>
.headBody{
  width: 100%;
  height: 60px;
  background-color: red;
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
              <DropdownItem name="logout" divided>
                <Icon type="ios-log-out" /> 退出登录
              </DropdownItem>
            </DropdownMenu>
          </template>
          <!-- 下拉菜单内容 -->
        </Dropdown>
      </Space>
    </div>
  </div>
</template>

<script>
export default {
  name:'HeadPage',
  data(){
    return{
      avatarUrl:'https://i.loli.net/2017/08/21/599a521472424.jpg',
      isMobile:true,
      list:"list"
    }
  },
  methods:{
    handleMenuItem(name) {
      switch(name) {
        case 'profile':
          this.$router.push('/profile')
          break
        case 'settings':
          this.$router.push('/settings')
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
    // 退出登录示例
    handleLogout() {
      this.$Modal.confirm({
        title: '确认退出',
        content: '您确定要退出当前账号吗？',
        onOk: () => {
          // 执行退出逻辑
          this.$Message.success('已退出登录')
        }
      })
    }
  }
}

</script>