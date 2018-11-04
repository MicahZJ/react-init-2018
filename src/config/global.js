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

export function test () {
	const url = '/api/getTest'
	const data = Object.assign({
		key:'c9d1eb9811e648a49ece24b7cb1065e9',
		info:'今天我最美',
		userId:1234
	})
	return axios.post(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res)
	})
}