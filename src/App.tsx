import Header from "./components/Header";
import Expense from "./components/ExpenseForm";

export interface ExpenseItem {
  id: number;
  amount: string;
  description: string;
  date: string;
}

const App = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-md p-4">
      <Header />
      <Expense />
    </div>
  );
};

export default App;
