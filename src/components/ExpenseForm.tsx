import React, { useState } from "react";

interface ExpenseItem {
  id: number;
  amount: string;
  description: string;
  date: string;
}

const Expense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: ExpenseItem = {
      id: Date.now(),
      amount,
      description,
      date,
    };

    setExpenses([newExpense, ...expenses]);
    setAmount("");
    setDescription("");
    setDate("");
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
    if (confirmDelete) {
      setExpenses(expenses.filter((expense) => expense.id !== id));
    }
  };

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.description.localeCompare(b.description);
      } else if (sortOrder === "desc") {
        return b.description.localeCompare(a.description);
      }
      return 0;
    });

  return (
    <div className="space-y-4">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      {/* ➕ Expense Form */}
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

      {/* 🔽 Sort Dropdown */}
      <div className="flex justify-end">
        <select
          onChange={(e) =>
            setSortOrder(e.target.value as "asc" | "desc" | "")
          }
          className="mb-2 px-3 py-2 border rounded bg-white text-sm focus:outline-none"
        >
          <option value="">Sort by Description</option>
          <option value="asc">A → Z</option>
          <option value="desc">Z → A</option>
        </select>
      </div>

      {/* 📄 Display Filtered & Sorted Expenses */}
      <div className="space-y-2">
        {filteredExpenses.length === 0 ? (
          <p className="text-gray-500">No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center bg-white border p-3 rounded shadow-sm"
            >
              <div>
                <p className="font-medium">{expense.description}</p>
                <p className="text-sm text-gray-500">{expense.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-blue-600 font-semibold">
                  Ksh {expense.amount}
                </p>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Expense;
