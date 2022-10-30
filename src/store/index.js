import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from './reducers/sidebarSlice';
import authSlice from './reducers/authSlice';
export const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		auth: authSlice,
	},
});
