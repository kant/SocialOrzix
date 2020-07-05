const API_ROOT = "http://codeial.com:8000/api/v2";

export const API_URLS = {
	login: () => `${API_ROOT}/users/login`,
	signUp: () => `${API_ROOT}/users/signup`,
	fetchPosts: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`
};