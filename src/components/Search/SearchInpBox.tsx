import { useRef } from "react";

interface SearchInpBoxProps {
  onSearch: (query: string) => void;
  initialQuery: string;
}

const SearchInpBox = ({ onSearch, initialQuery }: SearchInpBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const query = inputRef.current.value.trim();
      if (query) {
        onSearch(query); // 부모 컴포넌트에서 검색 실행
      }
      inputRef.current.value = "";
    }
  };

  return (
    <form className="search-inp-box" onSubmit={handleSubmit}>
      <input
        placeholder="영화를 검색하세요."
        ref={inputRef}
        defaultValue={initialQuery}
      />
      <button type="submit" className="search-btn">
        검색
      </button>
    </form>
  );
};

export default SearchInpBox;
