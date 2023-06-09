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

export const validateString = (str) => {
	let regex = /^[a-zA-Z0-9,''""!?&@\s]+$/;
	return regex.test(str);
};

const contactSlice = createSlice({
	name: "contactMe",
	initialState: {
		mailSending: false,
		mailSent: false,
		error: false,
		formHasErrors: false,
		inputHasError: {
			nameHasError: false,
			emailHasError: false,
			companyHasError: false,
			commentsHasError: false,
		},
	},
	reducers: {
		mailIsSendingStateHandler(state, action) {
			state.mailSending = action.payload.isMailSending;
		},

		inputChangeHandler(state, action) {
			const inputName = action.payload.name;
			const inputValue = action.payload.value;

			switch (inputName) {
				case "from_name":
					if (!validateName(inputValue.trim())) {
						state.inputHasError.nameHasError = true;
					} else {
						state.inputHasError.nameHasError = false;
					}
					break;
				case "reply_to":
					if (!validateEmail(inputValue)) {
						state.inputHasError.emailHasError = true;
					} else {
						state.inputHasError.emailHasError = false;
					}
					break;
				case "company":
					if (!validateString(inputValue)) {
						state.inputHasError.companyHasError = true;
					} else {
						state.inputHasError.companyHasError = false;
					}
					break;
				case "comments":
					if (!validateString(inputValue)) {
						state.inputHasError.commentsHasError = true;
					} else {
						state.inputHasError.commentsHasError = false;
					}
					break;
				default:
					return;
			}

			state[inputName] = inputValue;
			state.error = false;

			if(state.inputHasError.nameHasError ||
			state.inputHasError.emailHasError ||
			state.inputHasError.companyHasError ||
			state.inputHasError.commentsHasError){
				state.formHasErrors = true
			}else{
				state.formHasErrors = false
			}
		},

		errorHandler(state, action) {
			state.error = action.payload.isError;
		},

		formErrorHandler(state, action) {
			state.formHasErrors = action.payload.formHasErrors;
		},
	},
});

export const contactActions = contactSlice.actions;

export default contactSlice;
