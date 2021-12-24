import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'
import TestModuleTypes from './interface'

const testModule: Module<TestModuleTypes, RootStateTypes> = {
  // namespaced 命名空间可以提高模块的封装性和复用性
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    random: 0,
  },
  mutations: {
    // 同步使用mutation
    ADD_COUNT(state) {
      state.count += 1
    },
    RANDOM_TEST(state, payload) {
      state.random = payload
    },
  },
  actions: {
    // 异步使用action
    CHANGE_TEST(context, action) {
      setTimeout(() => {
        context.commit('RANDOM_TEST', action.payload)
      })
    },
  },
  modules: {},
}

export default testModule
