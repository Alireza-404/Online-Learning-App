import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const name: string = "UserStatus";

type UserStatus =
  | null
  | "Welcome"
  | "Signup"
  | "Login"
  | "Phone"
  | "Message"
  | "Modal";

interface UserStatusState {
  status: UserStatus;
}

const initialState: UserStatusState = {
  status: "Welcome",
};

const Slice = createSlice({
  name,
  initialState,
  reducers: {
    UpdateStatus: (state, action: PayloadAction<UserStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { UpdateStatus } = Slice.actions;
export default Slice.reducer;
