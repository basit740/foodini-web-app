import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from './reducers/sidebarSlice';
export const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
	},
});
