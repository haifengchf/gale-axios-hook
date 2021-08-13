import axios from 'axios';

function fetch (userOptions, method, header) {
	return new Promise((resolve, reject) => {
		// 创建一个axios实例
		const instance = axios.create({
			method: method,
			withCredentials: true
		});
		const options = { ...userOptions };
		// 请求处理
		instance(options)
			.then(res => {
				return resolve(res.data);
			})
			.catch(error => {
				return reject(error)
			})
	})
}

const $get = (userOptions, header) => {
	return fetch(userOptions, 'get', header);
};

const $post = (userOptions, header) => {
	return fetch(userOptions, 'post', header);
};

export { $get, $post };
