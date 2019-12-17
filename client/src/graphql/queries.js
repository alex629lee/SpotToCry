import gql from "graphql-tag";

export default {
  FETCH_PLAYLIST: gql`
    query FetchPlaylist($id: ID!) {
      playlist(id: $id) {
        _id
        title
        description
        songs {
          _id
          artist
          title
        }
      }
    }
  `,
  FETCH_PLAYLISTS: gql`
    query FetchPlaylists {
      playlists {
        _id
        title
        description
        songs {
          _id
          artist {
            _id
            name
          }
          title
        }
      }
    }
  `,
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_ALL_SONGS: gql` 
    query FetchAllSongs {
      songs {
        _id
        title
        imageUrl
        songUrl
        artist {
          _id
          name
          imageUrl
        }
      }
    }
  `,
  FETCH_ALL_ARTISTS: gql` 
    query FetchAllArtists {
      artists {
        _id
        name
        imageUrl
        songs {
          _id
          title
        }
        genres {
          _id
          name
        }
      }
    }
  `,
  FETCH_ALL_GENRES: gql` 
    query FetchAllGenres {
      genres {
        _id
        name
        imageUrl
        artists {
          _id
          name
          imageUrl
        }
      }
    }
  `,

  FETCH_ARTIST: gql`
    query FetchArtist($id: ID!) {
      artist(_id: $id) {
        _id
        name
        songs {
          _id
          name
        }
        genres {
          _id
          name
        }
        imageUrl
        description
      }
    }
  `,
  FETCH_GENRE: gql`
    query FetchGenre($id: ID!) {
      genre(_id: $id) {
        _id
        name
        imageUrl
        artists {
          _id
          name
          imageUrl
          songs {
            _id
            title
          }
        }
      }
    }
  `,
  FETCH_SONG: gql`
    query FetchSong($id: ID!) {
      song(_id: $id) {
        _id
        title
        songUrl
        imageUrl
        artist {
          _id
          name
          imageUrl
          description
          genres {
            _id
            name
          }
        }
      }
    }
  `,
};

