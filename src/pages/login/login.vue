<template>
  <view class="content" @click="onLoginClick">login</view>
</template>
<script>
export default {
  data() {
    return {
      title: "login"
    };
  },
  onLoad() {
  },
  methods: {
    onLoginClick() {
      uni.login({
        provider: "weixin",
        success: function(loginRes) {
          console.log(loginRes.authResult);
          // 获取用户信息
          uni.getUserInfo({
            provider: "weixin",
            success: function(infoRes) {
              console.log("用户昵称为：" + infoRes.userInfo);
            }
          });
        }
      });
    }
  }
};
</script>

<style>
.content {
  text-align: center;
  height: 400 upx;
  margin-top: 200 upx;
}
</style>
