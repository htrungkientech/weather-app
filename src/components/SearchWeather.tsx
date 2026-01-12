interface checkSearch{
    search: string,
    onSearch: (text: string) => void,
}

function SearchWeather({search, onSearch}: checkSearch) {
  return (
    <div>
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="
          w-full
          px-5 py-3
          text-black font-semibold
          bg-[#E9FDFD]
          border-2 border-[#0079BC] rounded-full
          outline-none focus:border-[#070062]
        "
      />
    </div>
  );
}

export default SearchWeather;
