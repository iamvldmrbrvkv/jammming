import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults({ data, addToPlaylist }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist data={data} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResults;