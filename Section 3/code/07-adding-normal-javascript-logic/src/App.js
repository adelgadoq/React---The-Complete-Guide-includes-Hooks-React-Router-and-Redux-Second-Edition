import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense_pass_data";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New 45 Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "r4",
    title: "Walker",
    amount: 45,
    date: new Date(2022, 5, 27),
  },
];

function App() {
  const [expenses, setExpenses] = useState([...DUMMY_EXPENSES]);

  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevState) => {
      return [newExpense,...prevState];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter items={expenses} />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;
