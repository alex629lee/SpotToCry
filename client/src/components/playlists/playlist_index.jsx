import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import Queries from "../../graphql/queries";
const { FETCH_PLAYLISTS } = Queries;

const PlaylistIndex = () => {
  return (
    <Query query={FETCH_PLAYLISTS}>
      {({ loading, error, data }) => {        
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;
        
        let userPlaylists = data.playlists.map(({ _id, title }) => {
          return (
            <div key={title} className="album-artist-container">
              <div className="image-hover-container">
                <div className="playlist-idx-cover-container">
                  <div className="playlist-art-container">
                    <img src="https://www.andrewwkmusic.com/wp-content/uploads/2014/05/No-album-art-itunes.jpg" />
                  </div>
                </div>
                <div className="Mike">
                  <button
                    id="Mike-button"
                    // onClick={() => this.handlePlay(playlist)}
                  >
                    <img id="Mike" src="https://spottocry.s3-us-west-1.amazonaws.com/play_white.png" />
                  </button>
                </div>
              </div>
              <Link
                id="playlist-grid-title"
                to={`/playlists/${_id}`}
              >
                <div className="title-container">{title}</div>
              </Link>
            </div>
          );
        });

        return <div className="playlist-index-container">{userPlaylists}</div>;
      }}
    </Query>
  );
};

export default PlaylistIndex;
