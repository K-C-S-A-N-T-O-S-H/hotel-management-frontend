import { config } from "./config";
export const getLocalStorageData = (name) => {
	try {
		return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(name))));
	} catch (error) {
		return "";
	}
};
export const setLocalStorageData = (name, data) => {
	try {
		localStorage.setItem(name, JSON.stringify(data));
		return true;
	} catch (error) {
		localStorage.setItem(name, JSON.stringify(data));
		return false;
	}
};

export const setCacheData = (name, cacheData) => {
	try {
		const data = new Response(JSON.stringify(cacheData));
		if ("caches" in window) {
			caches.open(name).then((cache) => {
				cache.put(config.url, data);
			});
		}
		return true;
	} catch (error) {
		return false;
	}
};
export const getCacheData = async () => {
	var names = await caches.keys();
	var cacheDataArray = [];
	names.forEach(async (name) => {
		const cacheStorage = await caches.open(name);
		const cachedResponse = await cacheStorage.match(config.url);
		var data = await cachedResponse.json();
		cacheDataArray.push(data);
		setCacheData(cacheDataArray.join(", "));
	});
	return cacheDataArray;
};
