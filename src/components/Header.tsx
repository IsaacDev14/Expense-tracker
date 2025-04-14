import { FaDollarSign } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center gap-2 text-2xl font-bold px-4 py-4 justify-between">
      <FaDollarSign className="text-blue-500" />
      <h1 className="text-orange-400">Expense Tracker</h1>
    </header>
  );
};

export default Header;
