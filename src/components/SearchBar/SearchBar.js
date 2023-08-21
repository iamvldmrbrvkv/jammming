import styles from './SearchBar.module.css';

function SearchBar({ searchInput, handleSeachInput, handleSearchSubmit }) {
  return (
    <div className={styles.SearchBar}>
      <h1>
        Jammming
      </h1>
      <input
        id='search-bar'
        type='text'
        name='search-bar'
        value={searchInput}
        placeholder='Enter A Song Title'
        onChange={handleSeachInput}
      />
      <button onClick={handleSearchSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;