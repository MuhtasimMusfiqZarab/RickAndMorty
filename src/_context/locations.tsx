import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

import getLocations from '../api/query/getLocations';

const LocationsContext = createContext({
  locations: null,
});

interface Props {
  children: ReactNode;
}

function LocationsProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(getLocations);

  return (
    <LocationsContext.Provider
      value={{
        locations: data?.locations?.results,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};
