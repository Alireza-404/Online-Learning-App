import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const name: string = "Fields";

type StringFields =
  | "emailForSignup"
  | "emailForLogin"
  | "passwordForSignup"
  | "passwordForLogin"
  | "phone"
  | "codeMessage"
  | "searchInputForCoursePage";

type BooleanFields =
  | "isEmailForSignupTrue"
  | "isEmailForLoginTrue"
  | "isPasswordForSignupTrue"
  | "isPasswordForLoginTrue"
  | "isPhoneTrue"
  | "isCodeMessageTrue"
  | "focusOnSearchInput";

interface FieldState {
  emailForSignup: string;
  emailForLogin: string;
  passwordForSignup: string;
  passwordForLogin: string;
  phone: string;
  codeMessage: string;
  searchInputForCoursePage: string;

  isEmailForSignupTrue: boolean;
  isEmailForLoginTrue: boolean;
  isPasswordForSignupTrue: boolean;
  isPasswordForLoginTrue: boolean;
  isPhoneTrue: boolean;
  isCodeMessageTrue: boolean;
  focusOnSearchInput: boolean;
}

const initialState: FieldState = {
  emailForSignup: "",
  emailForLogin: "",
  passwordForSignup: "",
  passwordForLogin: "",
  phone: "",
  codeMessage: "",
  searchInputForCoursePage: "",

  isEmailForSignupTrue: false,
  isEmailForLoginTrue: false,
  isPasswordForSignupTrue: false,
  isPasswordForLoginTrue: false,
  isPhoneTrue: false,
  isCodeMessageTrue: false,
  focusOnSearchInput: false,
};

const Slice = createSlice({
  name,
  initialState,
  reducers: {
    UpdateStringField: (
      state,
      action: PayloadAction<{ name: StringFields; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    AppendToPhoneField: (state, action: PayloadAction<string>) => {
      state.phone += action.payload;
    },
    AppendToCodeMessageField: (state, action: PayloadAction<string>) => {
      if (state.codeMessage.length === 4) {
        state.codeMessage = state.codeMessage.slice(0, 3) + action.payload;
      } else {
        state.codeMessage += action.payload;
      }
    },
    UpdateBooleanField: (
      state,
      action: PayloadAction<{ name: BooleanFields; value: boolean }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    ResetStringField: (state, action: PayloadAction<StringFields>) => {
      state[action.payload] = "";
    },
  },
});

export const {
  UpdateStringField,
  AppendToPhoneField,
  AppendToCodeMessageField,
  UpdateBooleanField,
  ResetStringField,
} = Slice.actions;
export default Slice.reducer;
