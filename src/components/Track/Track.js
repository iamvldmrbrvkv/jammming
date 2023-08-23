import styles from './Track.module.css';

function Track({ track, addToPlaylist }) {
  return (
    <li className={styles.Track}>
      <img
        src={track.images[2].url}
        alt='artwork'
      />
      {track.name} | {track.artists} | {track.album}
      <button onClick={() => addToPlaylist(track)}>
        +
      </button>
    </li>
  );
}

export default Track;