import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_EPISODES = gql`
  query {
    characters(page: 2, filter: {name: "rick"}) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

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
        characters {
          results {
            name
          }
        }
      }
    `,
  );
  console.log('Here is', data);

  return (
    <EpisodesContext.Provider
      value={{
        episodes: data,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
