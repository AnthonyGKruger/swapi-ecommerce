import { configureStore } from "@reduxjs/toolkit";

import userSlice from "@/store/userSlice";

const store = configureStore(
	{
		reducer: { user: userSlice.reducer },
	}
);

// const store = configureStore(
// 	{
// 		reducer: { user: userSlice.reducer },
// 	},
// 	composedEnhancer
// );

export default store;
