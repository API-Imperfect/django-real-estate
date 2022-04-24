import axios from "axios";

const REGISTER_URL = "/api/v1/auth/users/";
const LOGIN_URL = "/api/v1/auth/jwt/create/";
const ACTIVATE_URL = "/api/v1/auth/users/activation/";

// Register user
const register = async (userData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const response = await axios.post(REGISTER_URL, userData, config);
	return response.data;
};

// Login user

const login = async (userData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.post(LOGIN_URL, userData, config);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

const logout = () => localStorage.removeItem("user");

const activate = async (userData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.post(ACTIVATE_URL, userData, config);
	return response.data;
};

const authService = { register, login, logout, activate };

export default authService;
