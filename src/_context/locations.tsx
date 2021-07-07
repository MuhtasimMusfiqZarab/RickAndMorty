import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useQuery} from '@apollo/client';

import getLocations from '../api/query/getLocations';

const LocationsContext = createContext({
  locations: null,
});

interface Props {
  children: ReactNode;
}

function LocationsProvider({children}: Props) {
  const [allLocations, setAllLocations] = useState<any>(null);

  const {data, error, loading, refetch} = useQuery(getLocations);

  useEffect(() => {
    if (data?.locations?.results?.length > 0) {
      setAllLocations((prevState: any) => {
        return {...prevState, data};
      });
    }
  }, [data]);

  return (
    <LocationsContext.Provider
      value={{
        locations: allLocations?.data?.locations?.results,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};
