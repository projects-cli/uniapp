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
        <img src="../static/img/home_tab_unselect.png" class="user-info-content-img" />
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
          <img src="../static/img/home_tab_unselect.png" class="order-view-head-item-img" />
          <text>自提</text>
        </view>
        <view class="order-view-head-item">
          <img src="../static/img/home_tab_unselect.png" class="order-view-head-item-img" />
          <text>外卖</text>
        </view>
      </view>
      <view class="order-view-bottom"></view>
    </view>
    <view class="user-new-view">
      <text>新人专享</text>
    </view>
    <view class="product-new-view"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style>
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
  height: 80%;
  widows: 5px;
  background-color: red;

  margin-left: 10px;
  margin-right: 10px;
}
.order-view {
  width: 90%;
  height: 380rpx;
  margin-top: 20rpx;

  display: flex;
  flex-direction: column;

  border-radius: 10rpx;
  background-color: blue;

  justify-content: center;
  justify-items: center;
}

.order-view-head {
  display: flex;
  flex-direction: row;
  height: 300rpx;
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
}
.order-view-head-item text {
  margin-top: 22rpx;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
}

.order-view-bottom {
  display: flex;
  flex-direction: row;
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
.product-new-view {
  width: 90%;
  height: 217rpx;
  margin-top: 20rpx;

  display: flex;
  flex-direction: column;

  border-radius: 10rpx;
  background-color: blue;
}
</style>
