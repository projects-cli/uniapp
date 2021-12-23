import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import RootStateTypes, { StateTypes } from './interface'
import testModule from './modules/test'

export default createStore<RootStateTypes>({
  state: {
    test: 'test',
  },
  getters: {},
  mutations: {
    CHANGE_TEST(state, val) {
      state.test = val
    },
  },
  actions: {},
  modules: {
    testModule,
  },
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')
export function useStore<T = StateTypes>() {
  return baseUseStore<T>(key)
}
