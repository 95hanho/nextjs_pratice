import axios from "axios";

const $http = axios;

const baseUrl = process.env.BASE_URL;

$http.interceptors.request.use(
	(config) => {
		console.log("BASE_URL", baseUrl);
		// console.log("config.url", config.url);
		// console.log("config.baseURL", config.baseURL);

		if (config.url.startsWith("/api") && baseUrl) {
			config.url = baseUrl + config.url;
		}
		// console.log(config.method);
		// console.log(config.data);
		// console.log(config);
		return config;
	},
	(err) => {
		return err;
	}
);

$http.interceptors.response.use(
	(res) => {
		// console.log(res);
		return res;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export { $http };
