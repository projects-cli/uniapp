<template>
  <view class="content">
    <button @click="onAdd">自增{{ count }}</button>
    <button @click="onRandom">随机数{{ test }}</button>
    <uni-badge text="1"></uni-badge>
    <uni-tag text="标签">fdfdfd</uni-tag>
    <uni-icons class="icon" type="locked" size="24" />
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useStore } from '@/store'
import { a } from '@/hooks'
const store = useStore()
const count = computed(() => store.state.testModule.count)
const test = computed(() => store.state.test)
const onRandom = () => {
  store.commit('CHANGE_TEST', Math.random())
}

const onAdd = () => {
  store.commit('testModule/ADD_COUNT')
}

const title = ref('Hello')
console.log(14, a)
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
