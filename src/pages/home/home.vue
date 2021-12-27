<template>
  <view class="home_root">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item>
        <view class="swiper-item-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item-blue">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item-red">C</view>
      </swiper-item>
    </swiper>
    <view class="user-info-view">
      <view class="user-info-content">
        <img src="../../static/img/tab/tab_unselect.png" class="user-info-content-img" />
        <view class="user-info-content-body">
          <text class="user-info-content-body-name">昵称</text>
          <text class="user-info-content-body-time">永久有效</text>
        </view>
      </view>
      <view class="user-info-coupon-content">
        <view class="user-info-coupon">
          <text>112.5</text>
          <text>积分</text>
        </view>
        <view class="user-info-coupon-line" />
        <view class="user-info-coupon">
          <text>112.2</text>
          <text>优惠劵</text>
        </view>
      </view>
    </view>
    <view class="order-view">
      <view class="order-view-head">
        <view class="order-view-head-item">
          <img src="../../static/img/tab/tab_unselect.png" class="order-view-head-item-img" />
          <text>自提</text>
        </view>
        <view class="order-view-head-line" />
        <view class="order-view-head-item">
          <img src="../../static/img/tab/tab_unselect.png" class="order-view-head-item-img" />
          <text>外卖</text>
        </view>
      </view>
      <view class="order-view-center-line" />
      <view class="order-view-bottom">
        <view class="order-view-bottom-item">
          <img class="order-view-bottom-item-img" src="../../static/img/tab/tab_unselect.png" />
          <text>团餐</text>
        </view>
        <view class="order-view-bottom-item">
          <img class="order-view-bottom-item-img" src="../../static/img/tab/tab_unselect.png" />
          <text>拼单</text>
        </view>
      </view>
    </view>
    <view class="user-new-view" @click="onLoginClick">
      <text>新人专享</text>
    </view>
    <view class="product-new-view-head">
      <view class="product-new-view-head-left" />
      <text>爆款推荐</text>
      <view class="product-new-view-head-right" />
    </view>
    <view class="product-new-view">
      <view class="product-new-view-item">
        <product-new-item />
      </view>
      <view class="product-new-view-item">
        <product-new-item />
      </view>
      <view class="product-new-view-item">
        <product-new-item />
      </view>
    </view>
  </view>
</template>

<script>
import ProductNewItem from './components/product-new-item'
import UniGrid from '@/components/uni-ui/uni-grid/uni-grid'
import UniGridItem from '@/components/uni-ui/uni-grid-item/uni-grid-item'

export default {
  components: { UniGridItem, UniGrid, ProductNewItem },
  data () {
    return {
      title: 'Hello',
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    }
  },
  onLoad () {},
  methods: {
    onLoginClick () {
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          console.log(loginRes.authResult)
          // 获取用户信息
          uni.getUserInfo({
            provider: 'weixin',
            success: function (infoRes) {
              console.log('用户昵称为：' + JSON.stringify(infoRes.userInfo))
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.home_root {
  display: flex;
  flex-direction: column;

  align-content: center;
  align-items: center;
}

.swiper {
  height: 750rpx;
  width: 100%;

  background-color: red;
}

.swiper-item-red {
  background-color: red;
  height: 100%;
}

.swiper-item-blue {
  background-color: blue;
  height: 100%;
}

.user-info-view {
  width: 90%;
  height: 137rpx;
  margin-top: -68.5rpx;

  /* padding-left: 80rpx;
  padding-right: 80rpx; */

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  border-radius: 10rpx;
  background-color: gold;

  z-index: 10;
}

.user-info-content {
  display: flex;
  flex-direction: row;

  align-content: center;
  align-items: center;

  margin-left: 46rpx;
}

.user-info-content-img {
  height: 33px;
  width: 33px;

  border-radius: 15px;
}

.user-info-content-body {
  display: flex;
  flex-direction: column;

  text-align: left;
  margin-left: 20rpx;
}

.user-info-content-body-name {
  font-size: 11px;
  font-weight: 400;
  color: #000000;
}

.user-info-content-body-time {
  font-size: 10px;
  font-weight: 300;
  color: #999999;

  margin-top: 9rpx;
}

.user-info-coupon-content {
  display: flex;
  flex-direction: row;

  align-content: center;
  align-items: center;

  margin-right: 46rpx;
}

.user-info-coupon {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
}

.user-info-coupon text {
  font-size: 12px;
  font-weight: 400;
  color: #000000;
}

.user-info-coupon-line {
  height: 60%;
  border: 0.1rpx solid #eaeaea;

  margin-left: 10rpx;
  margin-right: 10rpx;
}

.order-view {
  width: 90%;
  height: 380rpx;
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;

  border-radius: 10rpx;

  justify-content: center;
  justify-items: center;
}

.order-view-head {
  display: flex;
  flex-direction: row;
  height: 300rpx;

  align-content: center;
  align-items: center;
}

.order-view-head-line {
  height: 134rpx;
  border: 1px solid #e3e3e3;
}

.order-view-head-item {
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  align-content: center;
}

.order-view-head-item-img {
  width: 22px;
  height: 50px;
}

.order-view-head-item text {
  margin-top: 22rpx;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
}

.order-view-center-line {
  width: 60%;
  height: 1px;
  border: 1px solid #e3e3e3;

  align-self: center;
}

.order-view-bottom {
  display: flex;
  flex-direction: row;
  width: 100%;

  align-items: center;
  align-content: center;
}

.order-view-bottom-item {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 81rpx;

  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
}

.order-view-bottom-item-img {
  height: 17px;
  width: 17px;
}

.order-view-bottom-item text {
  font-size: 10px;
  font-weight: 300;
  color: #000000;
  margin-left: 2rpx;
}

.user-new-view {
  width: 90%;
  height: 265rpx;
  margin-top: 20rpx;

  display: flex;
  flex-direction: column;

  border-radius: 10rpx;
  background-color: blue;
}

.user-new-view text {
  font-size: 18px;
  font-weight: 500;
  color: #000000;

  margin-left: 20rpx;
  margin-top: 20rpx;
}

.product-new-view-head {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.product-new-view-head text {
  font-size: 18px;
  font-weight: 500;
  color: #000000;
}

.product-new-view-head-left {
  width: 200rpx;
  height: 1px;
  border: 1px solid;
  border-image: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1)) 1 1;
}

.product-new-view-head-right {
  width: 200rpx;
  height: 1px;
  border: 1px solid;
  border-image: linear-gradient(249deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1)) 1 1;
}

.product-new-view {
  width: 90%;
  //height: 217rpx;
  margin-top: 20rpx;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border-radius: 10rpx;
  background-color: blue;
}

.product-new-view-item {
  width: 50%;
  height: 443rpx;
}
</style>
