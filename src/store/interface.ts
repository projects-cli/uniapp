import TestModuleTypes from './modules/test/interface'

export default interface RootStateTypes {
  test: string
}

export interface StateTypes extends RootStateTypes {
  testModule: TestModuleTypes
}
