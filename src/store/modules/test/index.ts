import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'
import TestModuleTypes from './interface'

const testModule: Module<TestModuleTypes, RootStateTypes> = {
  // namespaced 命名空间可以提高模块的封装性和复用性
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
  },
  mutations: {
    ADD_COUNT(state) {
      state.count += 1
    },
  },
  actions: {},
  modules: {},
}

export default testModule
