import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

export const validateName = (str) => {
	const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
	return nameRegex.test(str);
};

export const validatePassword = (password) => {
	// Regex to validate password
	var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	// Validate password
	if (regex.test(password)) {
		return true;
	} else {
		return false;
	}
};

const initialState = {
	// status: "idle",
	user: {
		isLoggedIn: false,
		name: "",
		email: "",
		password: "",
		notExistingUser: false,
	},
	error: null,
};

export const dataHandler = createAsyncThunk(
	"/user",
	async (userData) => {
		try {
			const response = await axios.post("/api/users", userData);
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logoutHandler(state) {
			state.user.isLoggedIn = false;
			state.user.name = "";
			state.user.email = "";
			state.user.password = "";
		},
		inputChangeHandler(state, action) {
			if (action.payload.type === "PASSWORD") {
				state.user.password = action.payload.value;
			} else if (action.payload.type === "EMAIL") {
				state.user.email = action.payload.value;
			} else if (action.payload.type === "NAME") {
				state.user.name = action.payload.value;
			}
			state.error = false;
		},
		setError(state, action) {
			state.error = action.payload.hasError;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(dataHandler.fulfilled, (state, action) => {
			
				if(action.payload == "successfully registered"){
					console.log("user registered and successfully logged in.")
					state.user.isLoggedIn = true;
				}

				if (action.payload.isUser) {
					state.user.isLoggedIn = true;
					state.user.name = action.payload.name;
					state.user.email = action.payload.email;
				}
			})
	},
});

export const userActions = userSlice.actions;

export default userSlice;
