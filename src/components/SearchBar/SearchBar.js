import styles from './SearchBar.module.css';

function SearchBar({ searchInput, handleSeachInput, handleSearchSubmit }) {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarHeader}>
        <h1>
          Jammming
        </h1>
      </div>
      <input
        id='search-bar'
        type='text'
        name='search-bar'
        value={searchInput}
        placeholder='Enter A Song Title'
        onChange={handleSeachInput}
        className={styles.SearchBarInput}
      />
      <button onClick={handleSearchSubmit} className={styles.SearchBarButton}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;