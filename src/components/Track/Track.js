import styles from './Track.module.css';

function Track({ track }) {
  return (
    <div className={styles.Track}>
      <li>
        {track.name}-{track.artist}-{track.album}
      </li>
    </div>
  )
}

export default Track;