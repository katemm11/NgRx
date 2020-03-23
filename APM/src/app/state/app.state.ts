//don't import ProductState because that feature is lazy loaded

import { UserState } from "../user/state/user.reducer";

export interface State {
  user: UserState;
}
