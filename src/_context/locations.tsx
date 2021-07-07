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
});

interface Props {
  children: ReactNode;
}

function LocationsProvider({children}: Props) {
  const [allLocations, setAllLocations] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const [GetLocations, {data, error, loading, refetch}] = useLazyQuery(
    getLocations,
    {
      variables: {
        page,
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

  return (
    <LocationsContext.Provider
      value={{
        locations: allLocations,
        getMoreLocations: GetLocations,
        setPage,
        loading,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};
