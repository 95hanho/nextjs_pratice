/*
 * 2024-04-11 version
 */
import { $http } from "./index";

// get
export const get_normal = (url, json, headers) => {
	url = url.replaceAll(" ", "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	return $http.get(url + queryString, {
		headers,
	});
};

// put urlFormData
export const put_urlFormData = (url, params, headers) => {
	const url_form_data = new URLSearchParams(params);
	return $http.put(url, url_form_data, {
		headers,
	});
};

// download
export const get_download = (url, json, headers) => {
	url = url.replaceAll(" ", "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	return $http.get(url + queryString, {
		headers,
		responseType: "blob",
	});
};

// post body
export const post_json = (url, params, headers) => {
	return $http.post(url, params, {
		headers,
	});
};

// post formData
export const post_formData = (url, params, headers) => {
	const formData = new FormData();
	Object.entries(params).map((v) => {
		if (v[1] instanceof Array || v[1] instanceof FileList) {
			for (let value of v[1]) {
				formData.append(v[0], value);
			}
		} else {
			formData.append(v[0], v[1]);
		}
	});
	return $http.post(url, formData, {
		headers,
	});
};

// post urlFormData
export const post_urlFormData = (url, params, headers) => {
	const url_form_data = new URLSearchParams(params);
	return $http.post(url, url_form_data, {
		headers,
	});
};

// delete
export const delete_normal = (url, json) => {
	url = url.replaceAll(" ", "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	return $http.delete(url + queryString);
};
