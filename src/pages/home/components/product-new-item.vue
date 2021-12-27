<template>
  <view class="product-new-view-root">
    <img class="product-new-view-root-img" src="../../../static/img/tab/tab_unselect.png" />
    <text class="product-new-view-root-title">{{ product?.tilte ?? '00' }}</text>
    <view class="product-new-view-tags">
      <uni-tag text="标签" type="error" :circle="true"></uni-tag>
      <uni-tag text="标签" type="error" :circle="true"></uni-tag>
      <uni-tag text="标签" type="error" :circle="true" :inverted="true"></uni-tag>
    </view>
    <view class="product-new-view-info">
      <text>简介简介</text>
      <text class="product-new-view-info-price">价格</text>
    </view>
  </view>
</template>

<script>
import UniTag from '../../../components/uni-ui/uni-tag/uni-tag'

export default {
  name: 'ProductNewItem',
  components: { UniTag },
  props: {
    product: {}
  }
}
</script>

<style scoped lang="scss">
.product-new-view-root {
  display: flex;
  flex-direction: column;
  height: 443rpx;

  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
}

.product-new-view-root-img {
  height: 60px;
  width: 60px;
}

.product-new-view-root-title {
  font-size: 11px;
  font-weight: 600;
  color: #333333;
  text-align: left;
  width: 100%;

  padding-left: 12rpx;
}

.product-new-view-tags {
  display: flex;
  flex-direction: row;
}

.product-new-view-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.product-new-view-info-price {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}
</style>
