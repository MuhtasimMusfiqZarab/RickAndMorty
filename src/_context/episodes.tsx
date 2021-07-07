import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useQuery} from '@apollo/client';

import getEpisodes from '../api/query/get-episodes';

const EpisodesContext = createContext({
  episodes: null,
});

interface Props {
  children: ReactNode;
}

function EpisodesProvider({children}: Props) {
  const [allEpisodes, setAllEpisodes] = useState<any>(null);

  const {data, error, loading, refetch} = useQuery(getEpisodes);

  useEffect(() => {
    if (data?.episodes?.results?.length > 0) {
      setAllEpisodes((prevState: any) => {
        return {...prevState, data};
      });
    }
  }, [data]);

  return (
    <EpisodesContext.Provider
      value={{
        episodes: allEpisodes?.data?.episodes?.results,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
