import {action, observable, computed} from 'mobx';
import {getGlobal, test} from "../../config/global";
import {Toast} from 'antd-mobile'
import {ERR_OK} from "../../config/config";

export default class Store {
	constructor() {
	}
	
	@observable a = 0
	
	@action b() {
	}
	
	@action
	getHomePageData() {
		getGlobal().then((res) => {
			if (res.code === ERR_OK) {
			}
		})
	}
	
	@action
	_test() {
		test().then((res) => {
			console.log('222', res)
		})
	}
	
	@computed get c() {
	}
	
}