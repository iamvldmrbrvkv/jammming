import styles from './Track.module.css';

function Track({ track, addToPlaylist }) {
  return (
    <div className={styles.Track}>
      <li>
        {track.name} | {track.artists} | {track.album}
        <button onClick={() => addToPlaylist(track)}>
          &#43;
        </button>
      </li>
    </div>
  );
}

export default Track;