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
  setSearchTerm: (value: string) => {},
  searchTerm: null,
  totalPages: 0,
  currentPage: 0,
});

interface Props {
  children: ReactNode;
}

function EpisodesProvider({children}: Props) {
  const [allEpisodes, setAllEpisodes] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  const [GetEpisodes, {data, error, loading, refetch}] = useLazyQuery(
    getEpisodes,
    {
      variables: {
        page,
        filter: {
          name: searchTerm,
        },
      },
    },
  );

  useEffect(() => {
    if (data?.episodes?.results?.length > 0) {
      setAllEpisodes((prevState: any) => {
        return [...prevState, ...data?.episodes?.results];
      });
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm) {
      setAllEpisodes([]);
      setPage(1);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (page) {
      GetEpisodes();
    }
  }, [page]);

  return (
    <EpisodesContext.Provider
      value={{
        episodes: allEpisodes,
        getMoreEpisodes: GetEpisodes,
        setPage,
        loading,
        setSearchTerm,
        searchTerm,
        totalPages: data?.episodes?.info?.pages,
        currentPage: page,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};
