import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useLazyQuery} from '@apollo/client';

import getEpisodes from '../api/query/get-episodes';

const EpisodesContext = createContext({
  episodes: null,
  getMoreEpisodes: () => {},
  setPage: (value: number) => {},
  loading: true,
});

interface Props {
  children: ReactNode;
}

function EpisodesProvider({children}: Props) {
  const [allEpisodes, setAllEpisodes] = useState<any>([]);

  const [page, setPage] = useState<number>(1);

  const [GetEpisodes, {data, error, loading, refetch}] = useLazyQuery(
    getEpisodes,
    {
      variables: {
        page,
      },
    },
  );

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
        getMoreEpisodes: GetEpisodes,
        setPage,
        loading,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
