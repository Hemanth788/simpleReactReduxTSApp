import { createStore, Dispatch, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
interface DepositOrWithdrawAction {
  type: "DEPOSIT" | "WITHDRAW";
  payload: number;
}
interface BankruptAction {
  type: "BANKRUPT";
  payload?: number;
}

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<DepositOrWithdrawAction | BankruptAction>) =>
    dispatch({ type: "DEPOSIT", payload: amount });
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<DepositOrWithdrawAction | BankruptAction>) =>
    dispatch({ type: "WITHDRAW", payload: amount });
};
export const bankruptMoney = () => {
  return (dispatch: Dispatch<DepositOrWithdrawAction | BankruptAction>) =>
    dispatch({ type: "BANKRUPT" });
};

export const reducer = (
  state: number = 0,
  action: DepositOrWithdrawAction | BankruptAction
) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action?.payload;
    case "WITHDRAW":
      return state - action?.payload;
    case "BANKRUPT":
      return 0;
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export type State = ReturnType<typeof reducer>;
export default store;
