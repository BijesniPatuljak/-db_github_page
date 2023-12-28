import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  isOpen: boolean;
  page: string;
}

const initialState: NavigationState = {
  isOpen: false,
  page: '',
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isOpen = !state.isOpen;
      state.page = '';
    },
    changeActivePage: (state, action: PayloadAction<{ page: string }>) => {
      state.page = action.payload.page;
    }
  }
});

export const { toggleNavigation, changeActivePage } = navigationSlice.actions;
export default navigationSlice.reducer;