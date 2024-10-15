import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className={styles.searchWrapper}>
      <header>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            className={styles.searchInput}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search images and photos"
          />
          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
