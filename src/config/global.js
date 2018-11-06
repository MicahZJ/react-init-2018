import {
	commonParams
} from './config'
import axios from 'axios'

export function getGlobal() {
	const url = '/api/getPicList'
	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1,
		format: 'json',
		g_tk: 5381,
		notice: 0
	})
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function searchBiLiBiLiInfo () {
	console.log('请求bl')
	const url = '/api/getBiliBili'
	const data = Object.assign({
		season_version: -1,
		area: -1,
		is_finish: -1,
		copyright: -1,
		season_status: -1,
		season_month: -1,
		pub_date: -1,
		style_id: -1,
		order: 3,
		st: 1,
		sort: 0,
		page: 1,
		season_type: 1,
		pagesize: 20,
	})
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
