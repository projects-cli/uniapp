import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import RootStateTypes, { StateTypes } from './interface'
import testModule from './modules/test'
import logger from './logger'

const plugins = [logger]

export default createStore<RootStateTypes>({
  modules: {
    testModule,
  },
  plugins,
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')
export function useStore<T = StateTypes>() {
  return baseUseStore<T>(key)
}
