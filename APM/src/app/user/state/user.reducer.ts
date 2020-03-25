import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface UserState {
  maskUserName: boolean;
  currentUser: any;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

export const getUserFeatureState = createFeatureSelector<UserState>("user");

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "MASK_USER_NAME":
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}
