interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
  }
  
  const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
    return (
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    );
  };
  
  export default SearchBar;
  