import {action, observable, computed} from 'mobx';
import {Toast} from 'antd-mobile'

export default class Store {
  constructor() {
  }

  @observable a = 0

  @action b() {
  }

  @computed get c() {
  }

}