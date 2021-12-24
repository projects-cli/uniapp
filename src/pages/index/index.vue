<template>
  <view class="content">
    <button @click="onAdd">自增{{ count }}</button>
    <button @click="onRandom">随机数{{ random }}</button>
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
const random = computed(() => store.state.testModule.random)
const onRandom = () => {
  // 对象风格
  store.dispatch({
    type: 'testModule/CHANGE_TEST',
    payload: Math.random(),
  })

  // 多参风格
  // store.commit('CHANGE_TEST', Math.random())
}

const onAdd = () => {
  // 对象风格
  store.commit({
    type: 'testModule/ADD_COUNT',
  })

  // 多参风格
  // store.commit('testModule/ADD_COUNT')
}

const title = ref('Hello')
console.log(14, a)
</script>

<style lang="scss"></style>
