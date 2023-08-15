import styles from './Playlist.module.css';

function Playlist({ playlistName, playlist, removeFromPlaylist, handleUserInput }) {
  return (
    <div className={styles.Playlist}>
      <h2>Playlist</h2>
      <form>
        <label htmlFor='playlist'></label>
        <input
          id='playlist'
          type='text'
          name='playlist'
          value={playlistName}
          placeholder='Enter A Playlist Title'
          onChange={handleUserInput}
        />
        <ul>
          {playlist.map(track => 
          <li key={track.id}>
            {track.name}-{track.artist}-{track.album}
            <button onClick={() => removeFromPlaylist(track)}>
              &#8722;
            </button>
          </li>
          )}
        </ul>
        <button type='submit'>SAVE TO SPOTIFY</button>
      </form>
    </div>
  )
}

export default Playlist;