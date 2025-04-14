import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

export interface ExpenseItem {
  id: number;
  amount: string;
  description: string;
  date: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (expense: ExpenseItem) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-md p-4">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={expenses} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
