import React from 'react';
import {gql} from '@apollo/client';
import {useQuery} from  '@apollo/client';
import TrackCard from '../containers/track-card';
import {Layout, QueryResult} from '../components';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {

const {loading, error, data} = useQuery(TRACKS);

if (loading) return 'Loading...';

if (error) return `Error! ${error.message}`;

//return <Layout grid>{JSON.stringify(data)}</Layout>;

return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
      {
        data.tracksForHome.map(track => (
          <TrackCard key={track.id} track={track} />
        ))
      }
      </QueryResult>
    </Layout>
);
};

export default Tracks;