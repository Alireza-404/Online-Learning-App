import { configureStore } from "@reduxjs/toolkit";
import UserStatus from "./Slices/UserStatus";
import Fields from "./Slices/Fields";

const Store = configureStore({
  reducer: { userStatus: UserStatus, fields: Fields },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
