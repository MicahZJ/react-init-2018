import {action, observable, computed} from 'mobx';
import {Toast} from 'antd-mobile'
import { runInAction } from "mobx-react/index";

export default class Store {
  constructor() {
  }

  @observable a = 0
	@observable data = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
  @observable slideIndex = 0
  @observable imgHeight = 176
  
  @action b() {
  }
  
  @action setImageHeight() {
	  this.imgHeight = 'auto'
			  // this.data = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
  }
  
  @action setIndex(index) {
    this.slideIndex= index
  }

  @computed get c() {
  }

}