import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ curr }) => {
  const sign = curr.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={curr.amount < 0 ? "minus" : "plus"}>
        {curr.text}{" "}
        <span>
          {sign}${Math.abs(curr.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(curr.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
