import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

const LocationsContext = createContext({
  locations: null,
});

interface Props {
  children: ReactNode;
}

function LocationsProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(
    gql`
      query {
        locations {
          results {
            id
            name
            type
            dimension
            residents {
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
