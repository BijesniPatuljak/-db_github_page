import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import navigationReducer from "./navigationSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;