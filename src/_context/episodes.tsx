import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery} from '@apollo/client';

//@ts-ignore
import GET_EPISODES from '../api/graphql/query/episodes.query.gql';

const EpisodesContext = createContext({});

interface Props {
  children: ReactNode;
}

function EpisodesProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(GET_EPISODES);

  console.log('THis is the data from get episodes', data);

  return (
    <EpisodesContext.Provider value={{}}>{children}</EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
