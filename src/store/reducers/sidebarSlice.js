import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'sidebar',
	open: false,
};

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		open: (state) => {
			const body = document.querySelector('body');
			body.style.overflow = 'hidden';
			state.open = true;
		},
		close: (state) => {
			const body = document.querySelector('body');
			body.style.overflow = 'auto';
			state.open = false;
		},
	},
});

export const { open, close } = sidebarSlice.actions;
export default sidebarSlice.reducer;
