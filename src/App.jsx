import { useContext, useEffect } from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpences from "./Components/IncomeExpences";
import TransactionList from "./Components/TransactionList";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { initialise } = useContext(GlobalContext);
  useEffect(() => {
    const expence = localStorage.getItem("expence");
    if (!expence) return;
    initialise(JSON.parse(expence));
  });

  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
