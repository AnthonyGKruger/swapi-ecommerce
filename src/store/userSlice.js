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

// const loginHelper = createAsyncThunk("/api/users", async () => {
// 	const response = await fetch("/api/users", {
// 		method: "POST",
// 		body: JSON.stringify({ userEmail, userPassword }),
// 	});
// 	return response.data;
// });

//can delete

const initialState = {
	status: "idle",
	user: {
		isLoggedIn: false,
		name: "",
		email: "",
		password: "",
		notExistingUser: false,
	},
	error: null,
};

export const fetchUser = createAsyncThunk("/user", async ({userEmail, userPassword}) => {
	// alert(userEmail);
	try {
		const response = await axios.post(
			"/api/users",
			{ userEmail, userPassword }
		);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

// const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
// const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
// const FETCH_USER_FAILED = "FETCH_USER_FAILED";

// const fetchUserRequest = () => {
// 	return { type: FETCH_USER_REQUESTED };
// };

// const fetchUserSucceeded = () => {
// 	return { type: FETCH_USER_SUCCEEDED, payload: user };
// };

// const fetchUserFailed = (error) => {
// 	return { type: FETCH_USER_FAILED, payload: error };
// };

// const fetchUser = () => {
// 	return (dispatch) => {
// 		dispatch(fetchUserRequest());
// 		axios
// 			.post("/api/users", JSON.stringify({ userEmail, userPassword }))
// 			.then((response) => {
// 				// response.data is the users
// 				const user = response.data;
// 				dispatch(fetchUserSuccess(user));
// 			})
// 			.catch((error) => {
// 				// error.message is the error message
// 				dispatch(fetchUserFailure(error.message));
// 			});
// 	};
// };

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginHandler(state, action) {},
		inputChangeHandler(state, action) {
			if (action.payload.type === "PASSWORD") {
				state.user.password = action.payload.value;
			} else if (action.payload.type === "EMAIL") {
				state.user.email = action.payload.value;
			} else if (action.payload.type === "NAME") {
				state.user.name = action.payload.value;
			}
			return;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			// Add user to the state array
			console.log(action.payload);
		});
	},
});

// export const loginHelper = async (userEmail, userPassword) => {
// 	const response = await fetch("/api/users", {
// 		method: "POST",
// 		body: JSON.stringify({ userEmail, userPassword }),
// 	});

// 	const data = await response.json();

// 	console.log(data);

// 	return data;
// };

// export const fetchUsers = async (dispatch) => {
// 	const response = await fetch("/api/users", {
// 		method: "POST",
// 	});

// 	const data = await response.json();

// 	dispatch(userSlice.actions.setUsers(data));
// };

// const userSlice = createSlice({
// 	name: "user",
// 	initialState: {
// 		isLoggedIn: false,
// 		name: "",
// 		email: "",
// 		password: "",
// 		cart: {},
// 		notExistingUser: false,
// 		existingUsers: {},
// 	},
// 	reducers: {
// 		setUsers(state, action) {
// 			state.existingUsers = action.payload;
// 		},
// 		// loginHandler(state, action) {},

// 		inputChangeHandler(state, action) {
// 			if (action.payload.type === "PASSWORD") {
// 				state.password = action.payload.value;
// 			} else if (action.payload.type === "EMAIL") {
// 				state.email = action.payload.value;
// 			} else if (action.payload.type === "NAME") {
// 				state.name = action.payload.value;
// 			}
// 			return;
// 		},

// 		// errorHandler(state, action) {
// 		// 	state.error = action.payload.isError;
// 		// },

// 		// formErrorHandler(state, action) {
// 		// 	state.formHasErrors = action.payload.formHasErrors;
// 		// },
// 	},
// 	extraReducers: (builder) => {
// 		builder.addCase(loginHelper.fulfilled, (state, action) => {
// 			// Add user to the state array
// 			// state.entities.push(action.payload);
// 		});
// 	},
// });

export const userActions = userSlice.actions;

export default userSlice;
