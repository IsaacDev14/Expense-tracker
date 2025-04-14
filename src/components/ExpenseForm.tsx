import { useState } from "react";
import { ExpenseItem } from "../App";

interface Props {
  addExpense: (expense: ExpenseItem) => void;
}

const ExpenseForm = ({ addExpense }: Props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: ExpenseItem = {
      id: Date.now(),
      amount,
      description,
      date,
    };
    addExpense(newExpense);
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 p-4 rounded-lg"
    >
      <h2 className="font-semibold text-lg">Add Expense</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Ksh 00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-3 py-2 bg-white border rounded focus:outline-none focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-3 py-2 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-orange-500 transition"
      >
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
