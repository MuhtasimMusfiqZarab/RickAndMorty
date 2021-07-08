import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useLazyQuery} from '@apollo/client';

import getLocations from '../api/query/get-locations';

const LocationsContext = createContext({
  locations: null,
  getMoreLocations: () => {},
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

function LocationsProvider({children}: Props) {
  const [allLocations, setAllLocations] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  const [GetLocations, {data, error, loading, refetch}] = useLazyQuery(
    getLocations,
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
    if (data?.locations?.results?.length > 0) {
      setAllLocations((prevState: any) => {
        return [...prevState, ...data?.locations?.results];
      });
    }
  }, [data]);

  const changeSearchTerm = (term: string) => {
    setAllLocations([]);
    setSearchTerm(term);
    setPage(1);
  };

  return (
    <LocationsContext.Provider
      value={{
        locations: allLocations,
        getMoreLocations: GetLocations,
        setPage,
        loading,
        setSearchTerm: changeSearchTerm,
        searchTerm,
        totalPages: data?.episodes?.info?.pages,
        currentPage: page,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};
