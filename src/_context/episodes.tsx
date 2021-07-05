import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

//@ts-ignore
import GET_EPISODES from '../api/query/episodes.query.gql';

const EpisodesContext = createContext({
  episodes: null,
});

interface Props {
  children: ReactNode;
}

function EpisodesProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(
    gql`
      query {
        episodes {
          results {
            id
            name
            air_date
            episode
            characters {
              id
              name
            }
            created
          }
        }
      }
    `,
  );

  return (
    <EpisodesContext.Provider
      value={{
        episodes: data?.episodes?.results,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
