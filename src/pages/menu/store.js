import {action, observable, computed} from 'mobx';
import {getGlobal, test, searchBiLiBiLiInfo} from "../../config/global";
import {Toast} from 'antd-mobile'
import {ERR_OK} from "../../config/config";

export default class Store {
	constructor() {
	}
	
	@observable menuArr = [{title:'追番人数'},
												 {title:'更新时间'},
												 {title:'最高评分'},
												 {title:'播放数量'},
												 {title:'开播时间'}]
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
	_getBiliBili() {
		searchBiLiBiLiInfo().then((res) => {
			if(res.code === 0) {
				console.log(res.result)
			}
		})
	}
	
	@computed get c() {
	}
	
}