import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({ data }) {
  return (
    <div className={styles.Tracklist}>
      <h2>Tracklist</h2>
      <ul>
        {data.map(track => (
            <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  )
}

export default Tracklist;