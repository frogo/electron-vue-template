<template>
  <div class="header-box">
    <el-header
      class="header"
      height="56px"
    >
      <el-row>
        <el-col :span="12">
          <h1 class="title">
            {{ title }}
          </h1>
        </el-col>
        <el-col :span="12" style="text-align: right;">
          <div class="user-info">
            <img
              v-if="userInfo.profile"
              @click="avaterVisible=true"
              :src="'data:image/jpeg;' + userInfo.profile"
              class="user-icon"
            >
            <img
              v-else
              @click="avaterVisible=true"
              src="~@/assets/image/avter.png"
              class="user-icon"
            >
            <span
              v-if="userInfo.orgName"
              :title="userInfo.orgName"
              class="username"
            >{{ userInfo.orgName }}</span>
            <span
              :title="userInfo.name"
              class="username"
            >{{ userInfo.name }}</span>
            <el-popover
              v-if="userInfo.name"
              placement="top-start"
              width="100"
              trigger="hover"
            >
              <span @click="dialogVisible=true" style="line-height: 30px;height: 30px;cursor: pointer">退出登录</span>
              <i
                slot="reference"
                class="el-icon-arrow-down arrow-icon"
              />
            </el-popover>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AppHeader',
  data () {
    return {
      dialogVisible: false, // 退出弹窗
      title: '标题'
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  watch: {

  },
  mounted: function () {
  },
  methods: {
    ...mapMutations([
      'updateUserInfo'
    ]),
    handleLogonOut () {
      sessionStorage.removeItem('userInfo')
    }
  }
}
</script>
<style lang="scss">
  .header-box{
    .header {
      background: #4771d4;
      a{ text-decoration: none}
    }
    .header h1.title {
      text-indent: 2.6em;
      font-size: 20px;
      color: #fff;
      height: 56px;
      line-height: 56px;
      background: url("../assets/image/logo.png") no-repeat left center;
      font-weight: bold;
    }
    .el-breadcrumb__inner.is-link, .el-breadcrumb__inner a {
      font-weight: normal;
    }
    .header h1 a {
      text-decoration: none;
      color: #fff;
    }
    .header .nav a {
      color: #fff;
      font-size: 14px;
      text-decoration: none;
      line-height: 52px;
      display: inline-block;
      border-bottom: 4px solid #e89d2c;
      padding: 0 3em;
    }
    /*.header .user-info i {*/
    /*width: 22px;*/
    /*height: 16px;*/
    /*color: #fff;*/
    /*}*/
    .header .telePhone {
      width: 310px;
      float: right;
      display: table-cell;
      height: 56px;
      line-height: 56px;
      text-align: center;
    }
    .header .telePhone span {
      color: #fff;
      font-size: 14px;
    }
    .header .user-info {
      padding-top: 12px;
      width: 242px;
      float: right;
      display: table-cell;
      vertical-align: middle;
      height: 56px;
    }
    .header .user-info span {
      color: #fff;
      font-size: 14px;
    }
    .header .user-info .split-line {
      padding: 0 20px;
    }
    .header .user-info .username, .header .user-info .orgName{
      padding: 0 0 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      width: auto;
      vertical-align: middle;
      max-width: 290px;
    }
    .header .user-info img {
      vertical-align: middle;
    }
    .header .user-icon {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border-radius:50%;
      cursor: pointer;
    }
    .header .user-icon use svg path {
      fill: #fff;
    }
    .header .arrow-icon {
      width: 10px;
      height: 16px;
      color: #fff;
      cursor: pointer;
      vertical-align: middle;
    }
    .el-form.demo-ruleForm {
      padding-right: 40px;
    }
  }
</style>
