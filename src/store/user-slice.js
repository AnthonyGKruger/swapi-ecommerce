import { createSlice } from "@reduxjs/toolkit";

export const validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

export const validateName = (str) => {
	const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
	return nameRegex.test(str);
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoggedIn: false,
		name: "",
		email: "",
		password: "",
		cart: {},
	},
	reducers: {
		loginHandler(state, action) {
			state.mailSending = action.payload.isMailSending;
		},

		inputChangeHandler(state, action) {
			if (action.payload.type === "PASSWORD") {
				state.password = action.payload.value;
			} else if (action.payload.type === "EMAIL") {
				state.email = action.payload.value;
			} else if (action.payload.type === "NAME") {
				state.name = action.payload.value;
			}
			return;
		},

		// errorHandler(state, action) {
		// 	state.error = action.payload.isError;
		// },

		// formErrorHandler(state, action) {
		// 	state.formHasErrors = action.payload.formHasErrors;
		// },
	},
});

export const userActions = userSlice.actions;

export default userSlice;
