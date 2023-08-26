import styles from './Track.module.css';

function Track({ track, addToPlaylist }) {
  return (
    <div className={styles.Track}>
      <img
        src={track.images[2].url}
        alt='artwork'
      />
      <div className={styles.TrackInfo}>
        <h3>{track.name}</h3>
        <p>{track.artists} • {track.album}</p>
      </div>
      <button onClick={() => addToPlaylist(track)} className={styles.TrackAddButton}>
        +
      </button>
    </div>
  );
}

export default Track;