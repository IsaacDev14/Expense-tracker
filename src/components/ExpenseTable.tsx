import { ExpenseItem } from "../App";

interface Props {
  expenses: ExpenseItem[];
  searchTerm: string;
}

const ExpenseTable = ({ expenses, searchTerm }: Props) => {
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-2 mt-4">
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
            <p className="text-blue-600 font-semibold">Ksh {expense.amount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseTable;
