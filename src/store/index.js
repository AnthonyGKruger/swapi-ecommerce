import { configureStore } from "@reduxjs/toolkit";

import userSlice from "@/store/user-slice";

const store = configureStore({
	reducer: {  user: userSlice.reducer },
});

export default store;