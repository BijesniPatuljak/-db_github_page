import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  value: boolean;
}

const initialState: NavigationState = {
  value: false
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.value = !state.value;
    }
  }
});

export const { toggleNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;