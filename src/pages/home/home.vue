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
    <view class="user-info-view"></view>
    <view class="order-view"></view>
    <view class="user-new-view"></view>
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

  display: flex;
  flex-direction: column;

  border-radius: 10rpx;
  background-color: blue;

  z-index: 10;
}
.order-view {
  width: 90%;
  height: 380rpx;
  margin-top: 20rpx;

  display: flex;
  flex-direction: column;

  border-radius: 10rpx;
  background-color: blue;
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
