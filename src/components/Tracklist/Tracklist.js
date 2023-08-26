import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({ data, addToPlaylist }) {
  return (
    <div className={styles.Tracklist}>
      {data.map(track => (
        <Track key={track.id} track={track} addToPlaylist={addToPlaylist} />
      ))}
    </div>
  );
}

export default Tracklist;