import styles from './Playlist.module.css';

function Playlist({ playlistName, playlist, removeFromPlaylist, handlePlaylistInput, handlePlaylistSubmit, success }) {
  return (
    <div className={styles.Playlist}>
      <h2>Playlist</h2>
      <input
        id='playlist'
        type='text'
        name='playlist'
        value={playlistName}
        placeholder='Enter A Playlist Name'
        onChange={handlePlaylistInput}
        className={styles.PlaylistInput}
      />
      {playlist.map(track => (
        <div key={track.id} className={styles.Track}>
          <img
            src={track.images[2].url}
            alt='Artwork'
          />
          <div className={styles.TrackInfo}>
            <h3>{track.name}</h3>
            <p>{track.artists} • {track.album}</p>
          </div>
          <button onClick={() => removeFromPlaylist(track)} className={styles.TrackRemoveButton}>
            -
          </button>
        </div>
      ))}
      {success && <p className={styles.SuccessMessage}>The playlist has been successfully saved to your Spotify account. Thank you for using this app!</p>}
      <button onClick={handlePlaylistSubmit} className={styles.PlaylistButton}>
        Save To Spotify
      </button>
    </div>
  );
}

export default Playlist;