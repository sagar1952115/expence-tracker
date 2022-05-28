export default (state, action) => {
  let newtodo = null;
  switch (action.type) {
    case "INITIALISE":
      return action.payload;

    case "DELETE_TRANSACTION":
      newtodo = {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
      localStorage.setItem("expence", JSON.stringify(newtodo));
      return newtodo;

    case "ADD_TRANSACTION":
      newtodo = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      localStorage.setItem("expence", JSON.stringify(newtodo));
      return newtodo;
    default:
      return state;
  }
};
