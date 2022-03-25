import { useDispatch, useSelector } from "react-redux";
import {
  State,
  depositMoney,
  withdrawMoney,
  bankruptMoney,
} from "./state/reducers/bankReducer";
function Buttons() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(200))}>Withdraw</button>
      <button onClick={() => dispatch(bankruptMoney())}>Bankrupt</button>
    </div>
  );
}

export default Buttons;
